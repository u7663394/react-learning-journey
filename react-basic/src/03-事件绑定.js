/**
 * React 事件绑定
 *
 * 语法: on + 事件名 = {事件处理函数}
 *   1. 事件名使用驼峰命名法 e.g. onClick
 */

const handleClick = (e) => {
  e.preventDefault();
  alert("link has been clicked");
};

root.render(
  <div>
    <div
      className="box"
      onClick={() => {
        alert("box has been clicked");
      }}
    />
    <a href="https://github.com/u7663394/" onClick={handleClick}>
      Github
    </a>
  </div>,
);
