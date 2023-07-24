import axios from "axios";
import { PATCH_FAILURE, PATCH_REQUEST, PATCH_SUCCESS } from "../actionTypes";
import { useSelector } from "react-redux";
import { setLS } from "../../LocalStorage/LocalStorageFn";

export const addBudget = (newbudget, user) => (dispatch) => {
  dispatch({ type: PATCH_REQUEST });

  // Step 1: Check if newbudget is an array, if not convert it into an array
  if (!Array.isArray(newbudget)) {
    newbudget = [newbudget];
  }

  // Step 2: Generate unique ids for new budget objects using current timestamp
  const currentTime = Date.now();
  newbudget = newbudget.map((budget, index) => ({
    ...budget,
    id: currentTime + index,
  }));

  // Step 3: Concatenate new budget objects with the existing budget array
  const updatedBudgets = [...user.financialinfo.budget, ...newbudget];
  axios
    .patch(`https://masaiprojects-mock-server-api.onrender.com/users/${user.id}`, {

      financialinfo: {
        ...user.financialinfo,
        budget: updatedBudgets,
      },
    })
    .then((response) => {
      dispatch({ type: PATCH_SUCCESS, payload: response.data });

      setLS(response.data);
      console.log('Budgets added successfully!', response.data);
      // Update your state or do any additional actions here if needed
    })
    .catch((error) => {
      dispatch({ type: PATCH_FAILURE });
      console.error('Failed to add budgets:', error);
    });
};
