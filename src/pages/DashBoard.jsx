import styled from "@emotion/styled";
import Sidebar from "../component/Sidebar";
import Details from "./Details";
import { burger } from "../utils/icons";
import { Button, Container, useDisclosure } from "@chakra-ui/react";
import Budget from "./Budget";
import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Withdraw } from "./Withdraw";
import { Transaction } from "./Transaction";
import { ProfilePage } from "./ProfilePage";
import Subscription from "./Subscription";

const DashBoard = () => {
  const [active, setActive] = useState(2);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const displayData = () => {
    switch (active) {
      case 1:
        return <ProfilePage />;

      case 2:
        return <Details />;

      case 3:
        return <Budget />;

      case 4:
        return <Withdraw />;

      case 5:
        return <Subscription />;

      case 6:
        return <Transaction />;

      default:
        return <Details />;
    }
  };

  return (
    <>
    <Container maxW={"8xl"}>
      <DIV>
        <div className="drawer-menu">
          <Button
            id="burger-button"
            ref={btnRef}
            bg="black"
            color={"white"}
            onClick={onOpen}
          >
            {burger}
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>

              <DrawerBody>
                <Sidebar
                  onClose={onClose}
                  active={active}
                  setActive={setActive}
                />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
        <div id="side-bar">
          <Sidebar active={active} setActive={setActive} onClose={onClose} />
        </div>
        <div id="details">{displayData()}</div>
      </DIV>
      </Container>
    </>
  );
};

export default DashBoard;

const DIV = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
  padding: 10px;
  margin-bottom: 20px;
  .drawer-menu {
    display: none;
  }

  #side-bar {
    width: 25%;
    text-align: left;
    background-color: #f2f2fc;
    border-radius: 32px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  #details {
    width: 75%;
    border-radius: 32px;
    background-color: #f2f2fc;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    #side-bar {
      display: none;
    }
    #details {
      width: 95%;
      margin: 0px;
      margin: auto;
    }
    .drawer-menu {
      display: block;
      text-align: left;
      padding-left: 10px;
    }
    #burger-button {
      position: fixed;
      top: 20px;
      left: 5px;
      z-index: 1000;
    }
  }
.drawer-menu{
    display: block;
    text-align: left;
    padding-left: 10px;
}}`
