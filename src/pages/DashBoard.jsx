import styled from "@emotion/styled";
import Sidebar from "../component/Sidebar";
import MainRoutes from "./MainRoutes";
import Details from "./Details";
import { burger } from "../utils/icons";
import { Button, Container, useDisclosure } from "@chakra-ui/react";
// import MenusItems from "../utils/MenuItems";
import Budget from "./Budget";
import React, { useState } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,   DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { Withdraw } from "./Withdraw";
import { Transaction } from "./Transaction";
import { ProfilePage } from "./ProfilePage";

const DashBoard = () => {
  const [active, setActive] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const displayData = () => {
    
    switch (active) {
      case 1:
        return <Details />;
      case 2:
        return <Budget />;
      case 3:
        return <Withdraw />;
      case 4:
        return <Transaction />;
      case 5:
        return <ProfilePage />;
      default:
        return <Details />;
    }
  };

  console.log(onClose)

  return (
    <Container maxW={"7xl"}>
    <DIV>
   <div className="drawer-menu" >
   <Button ref={btnRef} bg='black' color={"white"} onClick={onOpen}>
          {burger}</Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menus</DrawerHeader>
  
            <DrawerBody>
            <Sidebar onclick={onClose} active={active} setActive={setActive} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
   </div>
      <div id="side-bar">
        <Sidebar active={active} setActive={setActive} />
      </div>
      <div id="details">{displayData()}</div>
    </DIV>
    </Container>
  );
};
export default DashBoard;

const DIV = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
 padding:10px;
  margin-bottom: 20px;
  .drawer-menu{
    display: none;
  }

   #side-bar {
    width: 25%;
text-align: left; 
background-color: #F2F2FC;
border-radius: 32px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  }
  #details {
    width: 75%;
     border-radius: 32px;
     background-color: #F2F2FC;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  } 
  @media screen and (max-width: 900px) {
    display:flex;
    flex-direction: column;
    text-align: center;
  #side-bar {
  display: none;
  }
  #details{
    width: 95%;
    margin: 0px;
    margin: auto;
  }
.drawer-menu{
    display: block;
    text-align: left;
    padding-left: 10px;
}}
  
`
