/**
 * useRef 与 DOM 操作
 *   1. 创建 ref 对象, 与 JSX 绑定
 *   2. 通过 refName.current 获取 DOM 元素
 */
const MyRef = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <input ref={inputRef} />
      <hr />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        获取文本框的值
      </button>
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        获取焦点
      </button>
    </div>
  );
};

root.render(<MyRef />);
