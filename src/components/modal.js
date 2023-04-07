import styled from "styled-components"
import { useSelector } from "react-redux"

const ModalContainer = styled.section`// position 어떻게 줄지 생각해봐야할듯
width:200px;
height:100px;
background-color: var(--modal);
padding: 10px;
margin-top: 10px;
border-radius: 20px;
`
const Date = styled.div`
text-align:left;
font-size: 14px;
color: #675d50;
transition: all 1s;
&.dark{
    color: var(--beige);
}
`
const ShortList = styled.li`
text-align:left;
font-size: 12px;
margin: 10px;
color:black;
&.day::marker{
        color: var(--day)
    }
&.week::marker{
    color: var(--week)
}
&.month::marker{
    color: var(--month)
}
`
const Modal = ({ date }) => { // data 안에는 일,주,월 계획인지 분류가능하게 와야할듯
    const plan = []
    const data = useSelector(state => state.data) //전체 데이터
    const mode = useSelector(state => state.mode)
    for (let key in data) {
        // console.log(data[key])
        if (key !== 'favorites') {
            const show = data[key].find((el) => el.createdAt === date)
            if (show) {
                const mData = {
                    type: key,
                    text: show.text
                }
                plan.push(mData)
            }
        }
    }

    return (
        <ModalContainer>
            <Date className={mode ? null : 'dark'}>{date}</Date>
            {plan.map((el) => {
                return (
                    <ShortList className = {el.type}>{el.text}</ShortList>
                )
            })}
        </ModalContainer>
    )
}
export default Modal