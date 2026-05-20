/**
 * 为组件 prop 添加类型
 * 本质是给函数的参数做类型注解 (type or interface)
 */

type Props = {
  text: string;
};

// interface Props {
//   text: string;
// }

const MyButton = (props: Props) => {
  return <button>{props.text}</button>;
};

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <MyButton text="Click me" />
      <MyButton text="Submit" />
    </div>
  );
};

export default App;
