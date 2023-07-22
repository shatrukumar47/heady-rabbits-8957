import styled from "@emotion/styled";
import Sidebar from "../component/Sidebar";
import MainRoutes from "./MainRoutes";
import Details from "./Details";
// import MenusItems from "../utils/MenuItems";
import Budget from "./Budget";
import { useState } from "react";

const DashBoard = () => {
  const [active, setActive] = useState(1);
  const displayData = () => {
    switch (active) {
      case 1:
        return <Details />;
      case 2:
        return <Budget />;
      case 3:
        return <Budget />;
      case 4:
        return <Budget />;
      case 5:
        return <Budget />;
      default:
        return <Details />;
    }
  };

  return (
    <DIV>
      <div id="side-bar">
        <Sidebar active={active} setActive={setActive} />
      </div>
      <div id="details">{displayData()}</div>
    </DIV>
  );
};
export default DashBoard;

const DIV = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  gap: 20px;
  margin-top: 25px;
  margin-bottom: 25px;

   #side-bar {
    width: 25%;
text-align: left; 
border-radius: 32px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  }
  #details {
    width: 75%;
     border-radius: 32px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  } 
  @media screen and (max-width: 900px) {
    display:flex;
    flex-direction: column;
    text-align: center;
  #side-bar {
    width: 99%; /* Make the sidebar take full width on smaller screens */
    margin: 0px;
align-items: center;
justify-items: center;
  }
  #details{
    width: 99%;
    margin: 0px;
  }}
  
`
