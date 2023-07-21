import React, { useState } from 'react'
import styled from '@emotion/styled'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { Button, Heading } from '@chakra-ui/react';
import { FcPlus } from "react-icons/fc";
// import { useGlobalContext } from '../../context/globalContext';
// import Button from '../Button/Button';
// import { plus } from '../../utils/Icons';
const Budget=()=>{
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        // setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        // addIncome(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
        <div style={{marginTop:"20px",marginLeft:"20px"}}>
             <Heading as={"h3"} textAlign={'left'} size={"lg"}>Add Budget</Heading>
       
        <FormStyled onSubmit={handleSubmit}>
            {/* {error && <p className='error'>{error}</p>} */}
           
            <div className="input-control">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Salary Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'Salary Amount'}
                    onChange={handleInput('amount')} 
                />
            </div>
            <div className="input-control">
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
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
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
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="20" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
{/*            
                <Button border={"1px solid blue"} leftIcon={<FcPlus/>} color={'var(--chakra-colors-blue-500)'} variant={"outline"}
                size={"lg"}    bRad={'30px'}>Add Budget</Button> */}
                <button className='button'><div>{<FcPlus/>} Add Budget</div></button>
            </div>
        </FormStyled>
        </div>
    )
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
    background-color: #cce5ff;
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
 width: 40%;
 border: 1px solid #4f4f4f;
 border-radius: 50px;
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
     .button{
        width: 80%;
    }
 
 }

`;

export default Budget;