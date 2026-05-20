import { useState } from "react";

/**
 * 1. 自动推断类型 (明确的初始值)
 * 2. 传递泛型参数: 限制初始值类型, 限制setState的返回类型
 * 3. 初始值为 null: 具体类型联合 null 来显式注解
 */

type User = {
  name: string;
  age: number;
};

function App() {
  // 1. 自动推断类型
  const [list, setList] = useState([1, 2, 3]);
  const changeList = () => {
    setList([...list, list.length + 1]);
  };

  // 2. 传递泛型参数
  const [user, setUser] = useState<User>({ name: "张三", age: 20 });
  const changeUser = () => {
    setUser({ name: "李四", age: 30 });
  };

  // 3. 初始值为 null
  const [nullUser, setNullUser] = useState<User | null>(null);
  const changeNullUser = () => {
    setNullUser({ name: "王五", age: 40 });
  };

  return (
    <div>
      {list} <button onClick={changeList}>Add Item</button>
      <hr />
      {user.name} - {user.age} <button onClick={changeUser}>Change User</button>
      <hr />
      {nullUser?.name} - {nullUser?.age}
      <button onClick={changeNullUser}>Change Null User</button>
    </div>
  );
}

export default App;
