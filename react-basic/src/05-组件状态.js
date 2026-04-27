/**
 * 状态: 可以让页面内容发送变化的数据
 *
 * 语法: const [state, setState] = useState(initState)
 *   1. state: 存储状态的变量
 *   2. setState: 更新状态的函数
 *   3. initState: 状态的初始值
 *   4. useState React提供, 在函数组件中使用
 */

const Counter = () => {
  const [count, setCount] = useState(10);
  console.log("Counter 渲染了", count);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};

root.render(
  <div>
    <Counter />
  </div>,
);

/**
 * 修改状态的规则: 不要直接修改状态变量, 而是创建新值
 * 传递给 setState 函数来更新状态
 */

const ModifyState = () => {
  const [count, setCount] = useState(10);
  const [list, setList] = useState(["Apple", "Banana", "Cherry"]);
  const [user, setUser] = useState({ name: "Alice", age: 25 });

  return (
    <div>
      <h3>简单类型</h3>
      <div>{count}</div>
      <button
        onClick={() => {
          // count += 1;
          setCount(count + 1);
        }}
      >
        修改
      </button>

      <hr />

      <h3>数组</h3>
      <div>{list.join(", ")}</div>
      <button
        onClick={() => {
          // list.push("Orange");
          setList([...list, "Orange"]);
        }}
      >
        添加
      </button>
      <button
        onClick={() => {
          setList(list.filter((ele) => ele !== "Banana"));
        }}
      >
        删除
      </button>
      <button
        onClick={() => {
          setList(list.map((ele) => (ele === "Banana" ? "Grape" : ele)));
        }}
      >
        修改
      </button>

      <hr />

      <h3>对象</h3>
      <div>
        {user.name} - {user.age}
      </div>
      <button
        onClick={() => {
          setUser({ ...user, name: "Bob" });
        }}
      >
        修改
      </button>
    </div>
  );
};

root.render(
  <div>
    <ModifyState />
  </div>,
);
