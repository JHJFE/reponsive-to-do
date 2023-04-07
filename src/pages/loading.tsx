import styled from "styled-components";
import loading from '../assets/loading.gif';

const LoadingContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    background-color:${(props)=>props.theme.lightmode.background};
`
const Spinner = styled.div`
    background-image: url(${loading});
    background-size: cover;
    width:70px;
    height:70px;
`

function Loading() {
    return (
        <LoadingContainer>
            <Spinner></Spinner>
        </LoadingContainer>
    )
}
export default Loading