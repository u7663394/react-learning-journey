import { NavBar, Button, DatePicker, Input } from "antd-mobile";
import Icon from "@/icons";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import "./idnex.scss";
import { useState } from "react";
import { addBillList } from "@/store/modules/billStore";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

const New = () => {
  const billListData = {
    pay: [
      {
        type: "foods",
        name: "餐饮",
        list: [
          { type: "food", name: "餐费" },
          { type: "drinks", name: "酒水饮料" },
          { type: "dessert", name: "甜品零食" },
        ],
      },
      {
        type: "taxi",
        name: "出行交通",
        list: [
          { type: "taxi", name: "打车租车" },
          { type: "longdistance", name: "旅行票费" },
        ],
      },
      {
        type: "recreation",
        name: "休闲娱乐",
        list: [
          { type: "bodybuilding", name: "运动健身" },
          { type: "game", name: "休闲玩乐" },
          { type: "audio", name: "媒体影音" },
          { type: "travel", name: "旅游度假" },
        ],
      },
      {
        type: "daily",
        name: "日常支出",
        list: [
          { type: "clothes", name: "衣服裤子" },

          { type: "bag", name: "鞋帽包包" },

          { type: "book", name: "知识学习" },

          { type: "promote", name: "能力提升" },

          { type: "home", name: "家装布置" },
        ],
      },
      {
        type: "other",
        name: "其他支出",
        list: [{ type: "community", name: "社区缴费" }],
      },
    ],
    income: [
      {
        type: "professional",
        name: "其他支出",
        list: [
          { type: "salary", name: "工资" },
          { type: "overtimepay", name: "加班" },
          { type: "bonus", name: "奖金" },
        ],
      },
      {
        type: "other",
        name: "其他收入",
        list: [
          { type: "financial", name: "理财收入" },
          { type: "cashgift", name: "礼金收入" },
        ],
      },
    ],
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * 收入或支出状态
   */
  const [billType, setBillType] = useState("pay");

  /**
   * 保存账单
   */
  const [money, setMoney] = useState(0);
  const [useFor, setUseFor] = useState("");
  const saveBill = () => {
    // 1. 收集接口数据
    const data = {
      type: billType,
      money: billType === "pay" ? -money : +money,
      date: selectDate,
      useFor: useFor,
    };
    // 2. 提交 action
    dispatch(addBillList(data));
    // 3. 提示
    alert("保存成功");
  };

  /**
   * 日期选择器
   */
  const [dateVisible, setDateVisible] = useState(false);
  const [selectDate, setSelectDate] = useState(new Date());
  const dateConfirm = (date) => {
    setSelectDate(date);
    setDateVisible(false);
  };

  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate(-1)}>
        记一笔
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button
            shape="rounded"
            className={classNames(billType === "pay" ? "selected" : "")}
            onClick={() => setBillType("pay")}
          >
            支出
          </Button>
          <Button
            className={classNames(billType === "income" ? "selected" : "")}
            shape="rounded"
            onClick={() => setBillType("income")}
          >
            收入
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date">
              <Icon type="calendar" className="icon" />
              <span
                onClick={() => {
                  setDateVisible(true);
                }}
                className="text"
              >
                {dayjs(selectDate).format("YYYY-MM-DD")}
              </span>
              <DatePicker
                className="kaDate"
                title="记账日期"
                max={new Date()}
                visible={dateVisible}
                onConfirm={dateConfirm}
              />
            </div>
            <div className="kaInput">
              <Input
                value={money}
                onChange={(val) => setMoney(val)}
                className="input"
                placeholder="0.00"
                type="number"
              />
              <span className="iconYuan">¥</span>
            </div>
          </div>
        </div>
      </div>

      <div className="kaTypeList">
        {billListData[billType].map((item) => {
          return (
            <div className="kaType" key={item.type}>
              <div className="title">{item.name}</div>
              <div className="list">
                {item.list.map((item) => {
                  return (
                    <div
                      onClick={() => setUseFor(item.type)}
                      className={classNames(
                        "item",
                        useFor === item.type ? "selected" : "",
                      )}
                      key={item.type}
                    >
                      <div className="icon">
                        <Icon type={item.type} />
                      </div>
                      <div className="text">{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="btns">
        <Button onClick={saveBill} className="btn save">
          保存
        </Button>
      </div>
    </div>
  );
};

export default New;
