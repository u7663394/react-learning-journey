import { NavBar, DatePicker } from "antd-mobile";
import "./index.scss";
import { useMemo, useState } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import _ from "lodash";
import dayjs from "dayjs";

const Month = () => {
  /**
   * 弹框显示控制
   */
  const [dateVisible, setDateVisible] = useState(false);

  /**
   * 日期选择确认
   */
  const [currentDate, setCurrentDate] = useState(new Date());
  const onConfirm = (date) => {
    setCurrentDate(date);
    setDateVisible(false);
  };

  /**
   * 账单列表按月分组
   */
  const billList = useSelector((state) => state.bill.billList);
  // useMemo 类似 Vue 中的计算属性
  const monthGroup = useMemo(() => {
    return _.groupBy(billList, (ele) => dayjs(ele.date).format("YYYY-MM"));
  }, [billList]);
  console.log(monthGroup);

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/*时间切换区域 */}
          <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">
              {currentDate.getFullYear()} | {currentDate.getMonth() + 1}月账单
            </span>
            <span
              className={classNames("arrow", dateVisible && "expand")}
            ></span>
          </div>
          {/*统计区域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{100}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{300}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/*时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            onConfirm={onConfirm}
            onCancel={() => setDateVisible(false)}
            onClose={() => setDateVisible(false)}
            max={new Date()}
          ></DatePicker>
        </div>
      </div>
    </div>
  );
};

export default Month;
