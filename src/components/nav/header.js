import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Toggle from "./toggle";
import CalendarPage from "../../pages/calendar";
import { Routes, Route, Link } from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import { Show } from "../../store/store";

const HeaderContainer = styled.header`
position: relative;
height: 52px;
width: 100%;
margin-top : 50px;
padding: 0 20px;
background-color:${(props) => props.theme.lightmode.headerBackground};

transition: all 1s;
&.darkgray{
background-color: var(--day);
}
`
const IconContainer = styled.div`
width: 100px;
`
function Header() {
    let mode = useSelector((state)=>state.mode)
    let dispatch = useDispatch();
    
    const onClickCal = () => {
        dispatch(Show()) // 캘린더 보여주기 상태 값 변경
    }
    return (
        <>
            <HeaderContainer className={mode ? 'left-center-row-arrange' : 'left-center-row-arrange darkgray' } >
                <IconContainer onClick={onClickCal} className="calendar-icon-pos tablet-show">
                    {/* <FontAwesomeIcon icon={faList} size='lg' color='#FFF8EA'/> */}
                    <Link to='/calendar-page'><FontAwesomeIcon icon={faCalendarDays} size='lg' color='#FFF8EA' /></Link>
                </IconContainer>
                <Toggle className={mode ? null : 'darkgray' }/>
            </HeaderContainer>
        </>

    )
}

export default Header