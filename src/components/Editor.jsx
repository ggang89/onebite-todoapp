import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

export default function Editor() {
  const { onCreate } = useContext(TodoDispatchContext);
  // => useContext함수가 TodoContext로부터 받은 데이터를 반환해준다.
  // => 이 데이터가 반환한 값을 data 변수에 넣음
  // console.log(data) => value로 전달한 값 => 구조분해할당으로 사용 가능!

  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (content === "") {
      inputRef.current.focus(); //빈 input을 추가시도할 경우 input에 focus되도록
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        onKeyDown={onKeydown}
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}
