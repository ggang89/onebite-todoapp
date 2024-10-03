import { useReducer } from "react";

//reducer:변환기
//=> 상태를 실제로 변화시키는 변환기 역할을 하는 함수
//직접 만들어 줘야함
function reducer(state, action) {
  console.log(state, action);
  // if (action.type === "INCREASE") {
  //   return state + action.data;
  // } else if (action.type === "DECREASE") {
  //   return state - action.data;
  // }

  //switch 문으로
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

export default function Exam() {
  //dispatch : 발송하다, 급송하다
  // => 상태 변화가 있어야 한다는 사실을 알리는,발송하는 함수

  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    //인수 : 상태가 어떻게 변화되길 원하는지
    //{액션객체}로 전달함
    dispatch({
      //dispatch로 상태변화 요청
      type: "INCREASE", //액션객체들
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </>
  );
}
