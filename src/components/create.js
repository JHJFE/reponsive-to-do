import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { useState,Dispatch } from "react"
import { IsCreate } from "../store/store"
import { addTag } from "../store/store"

const CreateContainer = styled.main`
    width:50vw;
    height:200px;
    background-color:ivory;
    padding: 30px;
    border: 1px solid lightgray;
    border-radius:50px;
    position:fixed;
    left:190px;
    top:300px;
`

const TitleContainer = styled.section`
text-align:left;
font-size:35px;
font-weight:500;
`

const TitleInput = styled.input`
margin: 20px;
font-size:26px;
background-color: rgb(1,1,1,0);
border: none;
`

const RegisterBtn = styled.button`
margin-top:100px;
color: var(--beige);
background-color: var(--brown);
border: none;
border-radius: 15px;
padding: 5px;
`

const Create = () => {

    const data = useSelector((state) => { return state.data })
    let dispatch = useDispatch()
    let [title, setTitle] = useState('')
  

    const titleContent = (e) => setTitle(e.target.value)
    const registerHandler = ()=>{
        dispatch(addTag( { [title]:[] } ))
        dispatch(IsCreate())
    }
    return (
        <CreateContainer id="modal" className="come-down modal-tablet">
            <TitleContainer>Title: <TitleInput onChange={titleContent} placeholder="제목" /></TitleContainer>

            <div className="flex-end">
                <RegisterBtn onClick={registerHandler}>등록하기</RegisterBtn>
            </div>
        </CreateContainer>)
}
export default Create