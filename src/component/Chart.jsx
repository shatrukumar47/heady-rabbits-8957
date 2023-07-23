import React from 'react'
import chart from "../images/Chart.png"
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import styled from '@emotion/styled'
import { Heading } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
// import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const user = useSelector(store=>store.authReducer.User)
    const {budget,withdraw}=user.financialinfo
    // const totalbudget=budget.reduce((acc, cur) => acc + cur.amount, 0)
    // const totalExpense=withdraw.reduce((acc,cur)=>acc+cur.amount,0)
    console.log(budget,withdraw)

    const data = {
        labels: budget.map((inc) => inc.date),
  datasets: [
    {
      label: 'Income',
      data: budget.map((income) => income.amount), // Removed unnecessary destructuring
      backgroundColor: 'green',
      tension: 0.2,
    },
    {
      label: 'Expenses',
      data: withdraw.map((expense) => expense.amount), // Removed unnecessary destructuring
      backgroundColor: 'red',
      tension: 0.2,
    },
  ]
    }


    return (
            
       
        <ChartStyled >
            <Line data={data} />
           
            {/* <img src={chart}/> */}
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    /* background: #FCF6F9; */
    /* border: 2px solid red; */
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    text-align: start;
    width: 90%;
    background-color: white;
    margin: auto;
    
    border-radius: 20px;
    height: 100%;
    img{
        margin-top:10px ;
        width: 70%;
    }
`;

export default Chart;