import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CalendarPage from "../pages/calendar";
import AddClick from "./addButton";
import Create from "./create";
import { useSelector } from "react-redux";
import Todo from "../pages/todo/Todo";
import { useState } from "react";

const Container = styled.div`
display: flex;
width: 100%;
`
const SidebarContainer = styled.aside`
height: 780px;
flex-grow: 0.1;
padding: 30px;
background-color:${(props) => props.theme.lightmode.sideBackground};
transition: all 1s;
&.dark{
    background-color:${(props) => props.theme.darkmode.sideBackground};
}
`
const SidebarTodoContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: none;
`;
const Opt = styled.div`
    display: flex;
    flex-direction: row; 
    font-size:20px;
    margin-bottom:15px;
    color:var(--brown);
    transition: all 1s;
&.dark{
    color:var(--beige);
}
`
const SideBarMenu = styled.div`
color: var(--beige);
font-size: 12px;
font-weight: bolder;
margin : 20px;
`

function Sidebar() {
    let Data = useSelector(state => state)
    let titles = Object.keys(Data.data)
    let [todo, setTodo] = useState('day')
    let isCreate = Data.CU_state.isCreate
    
    let mode = useSelector((state)=>state.mode)
    
    const viewHanlder = (el) => {
        setTodo(el)
    }

    return (
        <Container>
            <SidebarContainer className = {mode ? null:'dark'}>
                <SidebarTodoContainer>
                    {titles.map((el, i) => {// 인덱스로 하는건 좋지 않지만 title 요소는 그래도 많지 않아서 일단 사용
                        return (
                            <Opt className={mode?null:'dark'} key={i}><FontAwesomeIcon icon={faChevronRight} />
                                <div className="margin20" onClick={() => { viewHanlder(el) }}>{el}</div>
                            </Opt>
                        )
                    })}
                </SidebarTodoContainer>
            </SidebarContainer>
            <Todo title={todo} />
            <CalendarPage state = 'tablet-noshow'/>
            {isCreate ? <Create /> : null}
            <AddClick />
        </Container>
    );
}
export default Sidebar