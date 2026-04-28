import { useState } from "react";
import classnames from "classnames";

/**
 * classnames 优化类名处理
 */

const MyButton = () => {
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState("small");

  return (
    <div>
      <button
        className={classnames("btn", {
          "btn-disabled": disabled,
          "btn-small": size === "small",
          "btn-large": size === "large",
        })}
      >
        按钮
      </button>
      <hr />
      <div>
        操作:
        <button onClick={() => setDisabled(true)}>禁用</button>
        <button onClick={() => setSize("small")}>变小</button>
        <button onClick={() => setSize("large")}>变大</button>
      </div>
    </div>
  );
};

root.render(<MyButton />);
