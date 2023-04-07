import styled from "styled-components"
import { Daymark, Weekmark, Monthmark } from "../../components/marks"
import { useSelector, useDispatch } from "react-redux"
import CalendarPage from "../calendar"
import List from "../../components/list/list"
import AddList from "../../components/addList"
const TodoContainer = styled.main`
    flex-grow: 0.9;
    height:780px;
    background-color:${(props) => props.theme.lightmode.background};
    padding: 30px;
    transition: all 1s;
    &.dark{
       background-color:${(props) => props.theme.darkmode.background};
    }
`
const Title = styled.section`
text-align:left;
font-size:35px;
font-weight:500;
`
const Lists = styled.ul`
display: flex;
flex-direction: column;
padding: 0 20px;
`

const Todo = ({ title }) => {
    let data = useSelector(state => state.data[title])
    let mode = useSelector(state => state.mode)
    let dontShow = useSelector((state) => state.cal_icon)
    return (
        <TodoContainer className={mode ? null : 'dark'}>
            <Title >{title}</Title>
            <Lists>
                {data.map((el) => {
                    return <List key={el.id} listData={el} />
                })}
            </Lists>
            <AddList title={title} id={data.length} />
            <div className="slide-in">
                {dontShow ? <CalendarPage state='side' tablet='tablet'/> : null}
            </div>
        </TodoContainer>
    )
}
export default Todo