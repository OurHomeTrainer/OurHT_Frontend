import React, { useState } from 'react'; //Hooks가 useState()함수 달아줌

//+버튼과 -버튼생성해서 숫자를 변화시키는 컴포넌트
function Counter(props) {
    //num : 지정될 숫자 - 변수에 담기
    //setNum : 변화될 숫자 - 변수에 담기
    const [num, setNum] = useState(0); //기본값을 0으로 처리
    const flag = 1;
    //1씩 증가할 함수
    const onIncrease = (n) => {
        setNum(num + 1); //클래스컴포넌트의 setState()함수처럼 사용
    }

    //1씩 감소할 함수
    const onDecrease = () => {
        setNum(num - 1); //클래스컴포넌트의 setState()함수처럼 사용
    }
    
    //스타일선언
    const style = {
        width: '100px',
        padding: '10px',
        margin: '10px',
        border: '3px solid black'
    }

    return (
        <div style={style}>
            <h1>값변화 : { num }</h1>
            <button onClick={() => onIncrease(3)}>+</button>
            <button onClick={onDecrease}>-</button>
            
        
        {
        flag === 1 ? (<div>증가</div>) : (<div>감소</div>)
         }
        </div>
    );
}

export default Counter;