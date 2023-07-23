import { MinusIcon } from "@chakra-ui/icons";
import { Container, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DatePicker from 'react-datepicker'
import netflix from "../images/netflix.png";
import amazon from "../images/amazon.png"
import hotster from "../images/hotstar.png"
import  tata from "../images/tata-sky.png"

import styled from "styled-components";

const Subscription=()=>{
    const [inputState, setInputState] = useState({
        subscription: '',
        amount: '',
        date: '',
        category: 'Subscription',
        description: '',
    })
    

    const { subscription, amount, date, category,description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        console.log({...inputState, [name]: e.target.value})
        // console.log(inputState)
        // // setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        // addIncome(inputState)
        setInputState({
            subscription: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }
   
    return(<>
                {/* <button className='button'><div>{<MinusIcon className='icon' color={"red"}/>} Subscribe</div></button>
               <div style={{display:"grid",gridTemplateColumns:"repeat(2,250px)",gap:"20px"}}>
                <img src={netflix} style={{background:"whitesmoke",width:"250px"}} alt="image**" />
                <img src={amazon} style={{background:"whitesmoke",width:"250px"}} alt="" />
                <img src={hotster} style={{background:"whitesmoke",width:"250px"}} alt="" />
                <img src={tata} style={{background:"whitesmoke",width:"250px"}} alt="" />
                </div>  */}

         <div style={{marginTop:"20px",marginLeft:"20px" , backgroundColor:"#F2F2FC"}}>
            <Container maxW={"5xl"}>
             <Heading as={"h3"} textAlign={'center'} size={"lg"}>Subscriptions</Heading>
       
        <FormStyled onSubmit={handleSubmit}>
         
           
            <div className="input-control">
                <label htmlFor="">Subscriptions:</label> <br/>
               
                <select name="subscription" value={subscription} onChange={handleInput('subscription')}>
                    <option value="Select">Select </option>
                    <option value="netflix" onClick={(e)=>setInputState({...inputState,amount:129})}>Netflix</option>
                    <option value="amazon-prime">Amazon-Prime</option>
                    <option value="hotstar">Hotstar</option>
                    <option value="tata-sky">Tata-Sky</option>
                </select>
            </div>
            <div className="input-control">
            <label htmlFor="">Amount:</label> <br/>
               
                <select name="amount" value={amount} onChange={handleInput('amount')}>
                    <option value="Select">Select Plan </option>
                    <option value="129">129 /month</option>
                    <option value="199">199 /2-month</option>
                    <option value="249">249 /3-month</option>
                    <option value="999">999 /year</option>
                </select>
            </div>
            <div className="input-control">
            <label htmlFor="">Date:</label>
                <div className='date-pick'>
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
                </div>
            </div>
        
            <div className="input-control">
            <label htmlFor="">Remark:</label>
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" rows="2" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">

                <button className='button'><div>{<MinusIcon className='icon' color={"red"}/>} Subscribe</div></button>
            </div>
        </FormStyled>
        </Container>
        </div>
     
    </>)
} 

    const FormStyled = styled.form`
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 50px;
      border-radius: 10px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        width: 50%;
        margin: auto;
        background-color: white;
        margin-top: 5px;
        margin-bottom: 15px;
        input, textarea, select{
            font-family: inherit;
            font-size: inherit;
            outline: none;
            padding: .5rem 1rem;
            border-radius: 5px;
            border: 1px solid black;
            background: white;
            resize: none;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            color: rgba(34, 34, 96, 0.9);
            &::placeholder{
                color: rgba(34, 34, 96, 0.4);
            }
        }
        .input-control{
            text-align:left;
            input{
                width: 100%;
            }
        }
        textarea{
            display: flex;
            justify-content: flex-start;
            width: 100%;
        }
        .selects{
            display: flex;
            justify-content: flex-start;
            
            select{
                color: rgba(34, 34, 96, 0.4);
                width: 48%;
                &:focus, &:active{
                    color: rgba(34, 34, 96, 1);
                }
            }
        }
    .date-pick{
        display: flex;
        justify-content: flex-start;
        width: 90%;
    }
        .submit-btn{
    /*        
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                &:hover{
                    background: var(--color-green) !important;
                } */
            
        }
        .button {
     display: inline-block;
     padding: 12px 24px;
     width: 60%;
     border: 1px solid #4f4f4f;
     border-radius: 30px;
     transition: all 0.2s ease-in;
     position: relative;
     overflow: hidden;
     font-size: 19px;
     color: black;
     z-index: 1;
    }
    .button div{
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
     background-color:#ba0722;
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
     background-color: #ba0722;
     border-radius: 50%;
     display: block;
     transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
     z-index: -1;
    }
    .button:hover .icon {
        color: white; 
      }
    .button:hover {
     color: #ffffff;
     border: 1px solid #39bda7;
    }
    
    .button:hover:before {
     top: -35%;
     background-color: #ba0722;
     transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }
    
    .button:hover:after {
     top: -45%;
     background-color: #ba0722;
     transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }
    @media screen and (max-width: 900px) {
        width: 90%;
         .button{
            width: 80%;
        }
     
     }
    
    `;


export default Subscription;