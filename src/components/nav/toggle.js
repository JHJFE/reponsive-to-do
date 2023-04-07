import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Change } from "../../store/store";
const ToggleContainer = styled.div`
  position: relative;
  margin-right : 50px;
  transition: all 1s;
  margin-left:80%;
  > .toggle-container {
    width: 50px;
    height: 26px;
    border-radius: 30px;
    background-color: ${(props) => props.theme.lightmode.toggleBackground};
  }


  > .toggle-circle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.lightmode.toggleInner};
    transition: all 1s;
 

    &.toggle--checked{
      -webkit-transform:  translateX(24px);
      background-color:  var(--day);
    }


  }
`;


function Toggle() {
  const dispatch = useDispatch()
  const [isOn, setisOn] = useState(false);
  const toggleHandler = () => {
    dispatch(Change())
    setisOn(!isOn)
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler} >
        <div className='toggle-container' />
        <div className={isOn ? 'toggle-circle toggle--checked darkgray' : 'toggle-circle'} />
      </ToggleContainer>
    </>
  );
};

export default Toggle