import classNames from "classnames";
import "./index.scss";
import { useMemo, useState } from "react";

const DailyBill = ({ date, billList }) => {
  /**
   * 统计当日的支出、收入和结余
   */
  const dayResult = useMemo(() => {
    const pay = billList
      .filter((ele) => ele.type === "pay")
      .reduce((a, c) => a + c.money, 0);
    const income = billList
      .filter((ele) => ele.type === "income")
      .reduce((a, c) => a + c.money, 0);
    return { pay, income, total: income + pay };
  }, [billList]);

  /**
   * 控制展开状态 + 箭头旋转
   */
  const [visible, setVisible] = useState(false);

  return (
    <div className={classNames("dailyBill")}>
      <div className="header">
        <div className="dateIcon">
          <span className="date"> {date}</span>
          <span
            onClick={() => setVisible(!visible)}
            className={classNames("arrow", { expand: visible })}
          ></span>
        </div>
        <div className="onLineOverview">
          <div className="pay">
            <span className="type">支出</span>
            <span className="money">{dayResult.pay.toFixed(2)}</span>
          </div>
          <div className="income">
            <span className="type">收入</span>
            <span className="money">{dayResult.income.toFixed(2)}</span>
          </div>
          <div className="balance">
            <span className="type">结余</span>
            <span className="money">{dayResult.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      {visible && (
        <div className="billList">
          {billList.map((item) => {
            return (
              <div className="bill" key={item.id}>
                <div className="detail">
                  <div className="billType">{item.useFor}</div>
                </div>
                <div className={classNames("money", item.type)}>
                  {item.money.toFixed(2)}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DailyBill;
