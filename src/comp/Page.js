import React from "react";

const Page = () => {
  return (
    <div>
      <h1>This is server page</h1>
      <button
        onClick={() => {
          alert("组件点击");
        }}
      >
        组件按钮
      </button>
    </div>
  );
};

export default Page;
