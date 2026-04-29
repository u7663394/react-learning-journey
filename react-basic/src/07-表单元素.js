/**
 * 使用状态操作表单元素的值
 *   1. 准备状态
 *   2. 绑定 value 和 onChange (双向绑定)
 *
 * 受控组件: 收到 React 状态控制的表单元素
 */

const MyInput = () => {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={() => console.log(value)}>获取</button>
      <button onClick={() => setValue("Hello, React!")}>修改</button>

      <hr />

      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      {checked ? "选中" : "未选中"}
    </div>
  );
};

root.render(<MyInput />);
