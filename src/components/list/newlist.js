// import styled from "styled-components";
// import { useState } from "react";
// const List = styled.div`
//     display:flex;
//     align-items:center;
//     height:40px;
//     border: 1px solid blue;
// `
// const DetailInput = styled(TitleInput)`
// font-size:20px;
// margin:20px;
// `
// const InputDone = styled.div`
// font-size:20px;
// margin:20px;
// `
// function NewList({setDetail}) {
//     let [done,setDone] = useState(false)
//     let [detail, setDetail] = useState('')

    
//     const detailContent = (e) => setDetail(e.target.value)
//     const enterHandler = (e) =>{
//         if(e.keyCode === 13){ //엔터치면
//          setPlans([...plans,{
//              id: plans.length, 
//              createAt:new Date().format('YYY-MM-DD'), // 만들어서 임시저장
//              text: detail,
//              type: title
//          }])
//          setDone(true) // 작성완료후 li로 바꿈
//         }
//      }
//     return (
//         <List>
//             <div className="dot"></div>
//             {done ? 
//             <InputDone onClick={()=>{setDone(false)}}/>:
//             <DetailInput onChange={detailContent} onKeyUp={enterHandler} />}
//         </List>
//     )
// }
// export default NewList;