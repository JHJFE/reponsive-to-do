import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{ //전역
        .left-center-col-arrange{
        display: flex;
        flex-direction: column; // 세로 방향 정렬
        justify-content: center;//메인축 정렬 --> 세로 방향이니까 세로 기준 가운데 부터 콘텐츠 배치
        align-items: flex-start;//수직축 정렬 --> 세로 방향이니까 가로 기준 왼쪽부터 콘텐츠 배치 
    }
    --beige: #FFF8EA;
    --brown :#A35709;
    --day:#364968;
    --week:#FDDF97;
    --month:#E09664;
    // 그때 그때 많이 쓰는거 사용하자
    }
`
export default GlobalStyle