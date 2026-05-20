/**
 * children 是 React 里用于 "组件嵌套内容" 的特殊 prop
 * 组件标签之间写的内容，都会自动传给 children
 * 通过内置的 ReactNode 类型来注解
 */

type Props = {
  children: React.ReactNode;
};

const MyButton = (props: Props) => {
  console.log(props);
  return <button>{props.children}</button>;
};

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <MyButton>Click me</MyButton>
      <MyButton>
        <span>This is span</span>
      </MyButton>
    </div>
  );
};

export default App;
