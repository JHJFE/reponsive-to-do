const windowsize ={
    mobile : 'screen and (max-width:"393px")',
    desktop : 'screen and (max-width:"1280px")'
}
const lightmode = {
    background: '#FAFAFA',//아니면 white로 할지 고민중
    headerBackground: '#A35709', //brown
    navFont: '#FFF8EA', // beige
    sideBackground:'#FFF8EA', // beige
    sideFont:'#A35709',//brown
    list: '#000000',//black

    toggleBackground:'#FFF8EA',//베이지
    toggleInner:'#A35709'
}
const darkmode = {
    sideBackground: '#567189',//다크그레이
    navBackground: '#364968', //네이비
    navFont: '#FFF8EA', // 베이지
    background:'#7B8FA1', // 라이트 그레이
    subFont:'#FFF8EA',// 베이지 or 다른 색 고민
    list: '#000000',//black
    toggleBackground:'#FFF8EA',// 베이지
    toggleInner:'#364968'
}
const modal = {
    background:'#6C4343', // 자주
    font:'#FFF8EA' // 베이지
}
const mark = {
    day:'#364968', // 네이비
    week:'#FDDF97', // 따뜻한 노란
    month:'#E09664' // 따뜻한 주황
}
interface Theme {
    [propName: string]:Object; // 정의 되지 않은 임의의 속성에 대한 타입 정의 방법
}
const theme : Theme = { // 모든 속성은 객체를 값을 가짐
    windowsize,
    lightmode,
    darkmode,
    modal,
    mark
}
export default theme