import styled from "@emotion/styled";
import React, { useState } from "react";
import { Menus } from "../utils/MenuItems";
import { signOut } from "../utils/icons";
import { Button } from "@chakra-ui/react";
import { deleteLS } from "../LocalStorage/LocalStorageFn";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_SUCCESS } from "../Redux/actionTypes";

const Sidebar = ({ active, setActive, onClose }) => {
  const dispatch = useDispatch();
  const User = useSelector((store) => store.authReducer.User);

  //Handle Logout
  const handleLogout = () => {
    deleteLS("auth");
    dispatch({ type: LOGOUT_SUCCESS });
  };

  return (
    <NavStyled>
      <div className="user-con">
        <img
          src="https://cdn-icons-png.flaticon.com/512/488/488938.png?w=740&t=st=1690110831~exp=1690111431~hmac=8170b637d79793cc753a647be4ed469a97f246e10c1cfd81363806365c7f5bb9"
          alt=""
        />
        <div className="text">
          <h2>{User?.name}</h2>
          <p>{User?.username}</p>
        </div>
      </div>
      <ul className="menu-items">
        {Menus.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                setActive(item.id);
                onClose();
              }}
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <Button
          color="white"
          variant="outline"
          leftIcon={signOut}
          transition={"border-radius 0.3s ease-in-out"}
          _hover={{
            borderRadius: "20px",
          }}
          onClick={handleLogout}
        >
          SignOut
        </Button>
      </div>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 100%;
  /* height: 100%; */
  /* border: 3px solid #ffffff; */
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 100px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      /* color: rgba(34, 34, 96, 1); */
      color: white;
    }
    p {
      /* color: rgba(34, 34, 96, 0.6); */
      color: white;
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      /* color: rgba(34, 34, 96, 0.6); */
      color: white;
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        color: white;
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }
  @media screen and (max-width: 900px) {
    width: 70%;
  }
`;
export default Sidebar;
