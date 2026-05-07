import classNames from "classnames";
import "./index.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodsList } from "../../store/modules/takeaway";

const Menu = () => {
  /**
   * 组件渲染时获取数据
   */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFoodsList());
  }, [dispatch]);

  /**
   * 渲染
   */
  const { foodsList } = useSelector((state) => state.foods);
  const menus = foodsList.map((item) => ({ tag: item.tag, name: item.name }));
  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            key={item.tag}
            className={classNames("list-menu-item", "active")}
          >
            {item.name}
          </div>
        );
      })}
    </nav>
  );
};

export default Menu;
