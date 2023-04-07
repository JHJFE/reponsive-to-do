import { useDispatch } from "react-redux";
import { IsCreate } from "../store/store";
import styled from "styled-components";
const AddButton = styled.div`
height: 50px;
width: 50px;
border-radius:50%;
background-color:var(--brown);
`
function AddClick() {
    let dispatch = useDispatch();
    return (
        <AddButton onClick={()=>{dispatch(IsCreate())}} className="pos-right-bottom add-button">+</AddButton>
    )
}

export default AddClick