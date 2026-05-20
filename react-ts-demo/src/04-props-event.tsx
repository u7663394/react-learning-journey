/**
 * 组件常常执行类型为函数的 prop 来实现子传父通信
 */

type Props = {
  onMsg?: (msg: string) => void;
};

const Son = (props: Props) => {
  const handleClick = () => {
    props.onMsg?.('Hello from Son');
  };

  return <button onClick={handleClick}>Click</button>;
};

const App = () => {
  const logMsg = (msg: string) => {
    console.log(msg);
  };

  return (
    <div>
      <h1>App</h1>
      <Son onMsg={logMsg} />
    </div>
  );
};

export default App;
