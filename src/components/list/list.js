import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { remove, update } from "../../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Dot = styled.div`
width: 5px;
height: 5px;
border-radius: 50%;
background-color: black;
margin: 10px;
`

const ListContainer = styled.div`
display: flex;
justify-content: start ;
align-items:center;

`
const ListCom = styled.div`
width: 315px;
text-align:left;
margin-left: 10px;
margin-right:10px;
font-size: 15px;
`
const InputCom = styled.input`
width: 313px;
margin-left: 8px;
margin-right: 10px;
font-size: 15px;
border: none;
border-bottom:1px solid black;
background-color:${(props) => props.theme.lightmode.background};
`

const DeleteButton = styled.div`
margin-top:7px;//ㅋㅋㅋ 나중에 반응형 리팩할때 calc를 쓰던 %를 쓰던 해야할듯
height: 3.5px;
width: 18.5px;
background-color: var(--brown);
`
const UpdateButton = styled.div`
margin-top:3px;//ㅋㅋㅋ 나중에 반응형 리팩할때 calc를 쓰던 %를 쓰던 해야할듯
width: 30px;
font-size: 12px;
color: var(--brown);
`

function List({ listData }) {
    //const store = createStore(reducers,)
    useEffect(()=>{
        setUpdateText(listData.text)
    },[listData])// 컴포넌트 실행시 리스트에 할당된 input 초기값을 listData.text로 초기화
    let CU_state = useSelector(state => state.CU_state)
    let isUpdateInitial = CU_state.isUpdate;

    let dispatch = useDispatch()

    let [updateText, setUpdateText] = useState(listData.text)
    let [isUpdate, setIsUpdate] = useState(isUpdateInitial)

    const removeHandler = (data) => {
        dispatch(remove(data))
    }
    const updateHandler = (e) => {
        setUpdateText(e.target.value)
    }
    const handleKey = async (e) => {
        if (e.key === 'Enter') {
            let upDateInfo = {
                ...listData, // 바꾸려는 리스트 정보
                text: updateText //입력한 텍스트만 바꾸서 객체화
            }
            dispatch(update(upDateInfo))
            setIsUpdate(!isUpdate)
        }
    }


    return (
        <ListContainer onKeyUp={handleKey}>
            <Dot />
            {isUpdate ? <InputCom name={listData.id} value={updateText}
                onChange={updateHandler} /> : <ListCom>{listData.text}</ListCom>}

            {/* <input onChange={updateHandler} value={listData.text}/> */}
            <UpdateButton onClick={() => { setIsUpdate(!isUpdate) }} ><FontAwesomeIcon icon={faPen} /></UpdateButton>
            <DeleteButton onClick={() => { removeHandler({ id: listData.id, type: listData.type }) }} />
        </ListContainer>
    )
}
export default List 