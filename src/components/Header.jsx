import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h2>오늘은 📅</h2>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// const memoizedHeader = memo(Header);

// export default memoizedHeader;

//2줄을 1줄로 간략히
export default memo(Header);
