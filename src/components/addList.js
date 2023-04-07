import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { add } from "../store/store"
const BtnContainer = styled.div`
color: #675D50;
float:left;
margin-left:26px;
`
function FormatData(date){
    return [date.getFullYear(),date.getMonth(), date.getDate()].join('-');
}
function AddList({ title, id }) {
    const dispatch = useDispatch();
    const addHandler = () => {
        let data = {
            id,
            createdAt: FormatData(new Date()),
            text: '',
            type: title
        }
        dispatch(add(data))
    }
    return (
        <BtnContainer onClick={addHandler}>
            <FontAwesomeIcon icon={faSquarePlus} />
        </BtnContainer>
    )
}

export default AddList