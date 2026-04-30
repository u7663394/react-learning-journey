/**
 * 组件 props: 给组件传递数据
 *
 * 语法:
 *   1. 传递 props: 在组件标签上添加属性
 *   2. 接收 props: 通过组件函数的参数接收
 *
 * 注意:
 *   1. props 参数是一个对象, 包含了组件标签上所有的属性
 *   2. props 是只读的, 组件不能修改 props 的值
 *   3. 传递非字符串类型时, 需要使用大括号包裹
 *   4. 支持解构来简化, 没传时可以设置默认值
 */
import image from "./assets/avatar.svg";

const Avatar = (props) => {
  console.log(props);
  return <img src={image} alt="" className={props.size} width={props.number} />;
};

// const Avatar = ({ size = "medium", number = 100 }) => {
//   return <img src={image} alt="" className={size} width={number} />;
// };

const App = () => {
  return (
    <div>
      <Avatar size="large" number={200} />
    </div>
  );
};

root.render(<App />);
