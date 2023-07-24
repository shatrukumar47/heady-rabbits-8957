import React, { useState } from "react";
import styled from "@emotion/styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Heading } from "@chakra-ui/react";
import { FcPlus } from "react-icons/fc";

import { addBudget } from "../Redux/budgetReducer/action";
import { useDispatch, useSelector } from "react-redux";

const Budget = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.authReducer.User);
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    remark: "",
    category: "",
  });

  const handleAddBudget = () => {
    // Create an array of new budget objects
    const newBudgets = [
      {
        title: title,
        amount: amount,
        date: date,
        remark: remark,
        category: category,
      },
    ];
    dispatch(addBudget(newBudgets, user));
  };
  const { title, amount, date, remark, category } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({
      ...inputState,
      [name]: name === "amount" ? +e.target.value : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddBudget();
    setInputState({
      title: "",
      amount: "",
      date: "",
      remark: "",
      category: "",
    });
  };

  return (
    <DIV>
      <Heading as="h3" textAlign="center" mt={2} size="lg" marginTop={"20px"} color={"#E64158"}>
        Add Budget
      </Heading>

      <FormStyled onSubmit={handleSubmit}>
        <div className="input-control">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            name="title"
            placeholder="Salary Title"
            onChange={handleInput("title")}
          />
        </div>
        <div className="input-control">
          <label>Amount:</label>
          <input
            value={amount}
            type="number"
            name="amount"
            placeholder="Salary Amount"
            onChange={handleInput("amount")}
          />
        </div>
        <div className="input-control">
          <label>Date:</label>
          <div className="date-pick">
            <DatePicker
              id="date"
              type="date"
              placeholderText="Enter A Date"
              select={date}
              dateFormat="dd/MM/yyyy"
              onChange={(date) => {
                setInputState({ ...inputState, date: date });
              }}
            />
          </div>
        </div>
        <div className="selects input-control">
          <label>Category:</label>
          <select
            required
            value={category}
            name="category"
            id="category"
            onChange={handleInput("category")}
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="salary">Salary</option>
            <option value="freelancing">Freelancing</option>
            <option value="investments">Investiments</option>
            <option value="stocks">Stocks</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="bank">Bank Transfer</option>
            <option value="youtube">Youtube</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="input-control">
          <label>Remark:</label>
          <textarea
            name="description"
            value={remark}
            placeholder="Remark"
            id="description"
            cols="20"
            rows="2"
            onChange={handleInput("remark")}
          ></textarea>
        </div>
        <div className="submit-btn">
          <button className="button">
            <div>
              <FcPlus /> Add Budget
            </div>
          </button>
        </div>
      </FormStyled>
    </DIV>
  );
};

const DIV = styled.div`
  background-color: #28303F;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 30px;
  padding-bottom: 20px;
`;
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 30px;
  border-radius: 30px;
  box-shadow: rgb(56, 138, 201) 0px 1px 2px 0px,
    rgb(126, 176, 214) 0px 2px 6px 2px;
  width: 90%;
  margin: auto;
  background-color: #EEEEEE;
  color: black;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 15px;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid black;
    background: white;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  .input-control {
    margin: auto;
    width: 100%;
    text-align: left;
    input {
      width: 90%;
      display: block;
    }
  }
  textarea {
    width: 90%;
    display: block;
  }
  .selects {
    select {
      color: rgba(34, 34, 96, 0.4);
      width: 90%;
      display: block;
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
  .input-control > .date-pick {
    display: flex;
    justify-content: flex-start;
    width: 90%;
  }

  .button {
    display: inline-block;
    padding: 12px 24px;
    width: 30%;
    border: 1px solid #E64158;
    border-radius: 50px;
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    font-size: 19px;
    color: #E64158;
    z-index: 1;
  }
  .button div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  .button:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #39bda7;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button:hover {
    color: #ffffff;
    border: 1px solid #39bda7;
  }

  .button:hover:before {
    top: -35%;
    background-color: #39bda7;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  .button:hover:after {
    top: -45%;
    background-color: #39bda7;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
  @media screen and (max-width: 900px) {
    width: 90%;
    .button {
      width: 80%;
    }
  }
`;

export default Budget;
