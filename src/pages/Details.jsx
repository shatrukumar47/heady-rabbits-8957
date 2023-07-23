import styled from "@emotion/styled";
import Chart from "../component/Chart";
import { useSelector } from "react-redux";
import { Heading } from "@chakra-ui/layout";
import { left } from "@popperjs/core";
const dollar="₹"
const Details=()=>{
    const user = useSelector(store=>store.authReducer.User)
    const {budget,withdraw}=user.financialinfo

    const totalbudget=budget.reduce((acc, cur) => acc + +cur.amount, 0)

    const totalExpense=withdraw.reduce((acc,cur)=>acc + +cur.amount,0)

    console.log(budget,withdraw,totalbudget)
    const totalBalance=()=>{
    return totalbudget-totalExpense
    }
    const totalExpenses=()=>{
        return totalExpense
        }
        const totalIncome=()=>{
            return totalbudget
            }
    return(
        <DIV>
        
            
            <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
            <div className="chart-div">
        <Heading as={"h3"} textAlign={"center"} size={'lg'}>Analysis</Heading>
        <Chart/>
        </div>
        </DIV>
    )
}

const DIV=styled.div`
.chart-div{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
}
.amount-con{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 2rem;
                margin: auto;
                width: 90%;
                margin-top:2rem;
                margin-bottom: 2rem;
                .income, .expense{
                    /* grid-column: span 2; */
                }
                .income, .expense, .balance{
                    /* background: #FCF6F9; */
                    border: 2px solid #FFFFFF;
                    background-color: white;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    /* padding: 1rem; */
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }

                .balance{
                    /* grid-column: 2 / 4; */
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: green;
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
            }
            @media screen and (max-width: 900px) {
                .amount-con{
                    display: grid;
                    grid-template-columns: repeat(1,1fr);
                    width: 100%;
                }
}
`
export default Details;