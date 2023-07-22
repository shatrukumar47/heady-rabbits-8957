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

// import {Line} from 'react-chartjs-2'
import styled from '@emotion/styled'
import { Heading } from '@chakra-ui/react'
// import { useGlobalContext } from '../../context/globalContext'
// import { dateFormat } from '../../utils/dateFormat'

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
    // const {incomes, expenses} = useGlobalContext()

    // const data = {
    //     labels: incomes.map((inc) =>{
    //         const {date} = inc
    //         return dateFormat(date)
    //     }),
    //     datasets: [
    //         {
    //             label: 'Income',
    //             data: [
    //                 ...incomes.map((income) => {
    //                     const {amount} = income
    //                     return amount
    //                 })
    //             ],
    //             backgroundColor: 'green',
    //             tension: .2
    //         },
    //         {
    //             label: 'Expenses',
    //             data: [
    //                 ...expenses.map((expense) => {
    //                     const {amount} = expense
    //                     return amount
    //                 })
    //             ],
    //             backgroundColor: 'red',
    //             tension: .2
    //         }
    //     ]
    // }


    return (
        <div style={{marginTop:"20px", marginLeft:"20px",textAlign:"left"}}>
             <Heading as={"h3"} size={'lg'}>Analysis</Heading>
       
        <ChartStyled >
            {/* <Line data={data} /> */}
           
            <img src={chart}/>
        </ChartStyled>
        </div>
    )
}

const ChartStyled = styled.div`
    /* background: #FCF6F9; */
    /* border: 2px solid red; */
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    text-align: start;
    width: 70%;
    margin: auto;
    
    /* border-radius: 20px; */
    height: 100%;
    img{
        margin-top:10px ;
        width: 70%;
    }
`;

export default Chart;