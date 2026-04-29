import { useRef, useState } from "react";
import "./App.scss";
import orderBy from "lodash/orderBy";
import dayjs from "dayjs";
// 使用本地图片需要先导入
import avatar from "./assets/avatar.svg";

// 评论列表数据
const defaultList = [
  {
    rpid: 3,
    user: {
      uid: "13258165",
      avatar: "",
      uname: "周杰伦",
    },
    content: "哎哟，不错哦",
    ctime: "10-18 08:15",
    like: 68,
    action: 0,
  },
  {
    rpid: 2,
    user: {
      uid: "36080105",
      avatar: "",
      uname: "许嵩",
    },
    content: "我寻你千百度 日出到迟暮",
    ctime: "11-13 11:29",
    like: 66,
    action: 2,
  },
  {
    rpid: 1,
    user: {
      uid: "30009257",
      avatar,
      uname: "React Learner",
    },
    content: "Learn React step by step",
    ctime: "10-19 09:00",
    like: 99,
    action: 1,
  },
];

// 用户信息
const user = {
  uid: "30009257",
  avatar,
  uname: "React Learner",
};

// Tab 数组
const tabs = [
  { type: "hot", name: "最热" },
  { type: "time", name: "最新" },
];

const App = () => {
  // 评论列表状态
  const [list, setList] = useState(defaultList);

  // 当前 Tab 状态
  const [activeTab, setActiveTab] = useState("hot");

  // 评论表单状态
  const [comment, setComment] = useState("");

  // 删除评论
  const onDelete = (rpid) => {
    setList(list.filter((ele) => ele.rpid !== rpid));
  };

  // 点赞
  const onLike = (rpid) => {
    setList(
      list.map((ele) => {
        if (ele.rpid === rpid) {
          return {
            ...ele,
            action: ele.action === 1 ? 0 : 1,
            like: ele.action === 1 ? ele.like - 1 : ele.like + 1,
          };
        }
        return ele;
      }),
    );
  };

  // 不喜欢
  const onDislike = (rpid) => {
    setList(
      list.map((ele) => {
        if (ele.rpid === rpid) {
          return {
            ...ele,
            action: ele.action === 2 ? 0 : 2,
            like: ele.action === 1 ? ele.like - 1 : ele.like,
          };
        }
        return ele;
      }),
    );
  };

  // 发布评论
  const onSend = () => {
    if (comment.trim()) {
      // 1. 构造新评论
      const newComment = {
        rpid: Date.now(),
        user,
        content: comment,
        ctime: dayjs().format("MM-DD HH:mm"),
        like: 0,
        action: 0,
      };
      // 2. 添加到列表中
      const newList = [newComment, ...list];
      setList(
        orderBy(newList, activeTab === "time" ? "ctime" : "like", "desc"),
      );
      // 3. 清空输入框
      setComment("");
    }
  };

  // 切换 Tab
  const onToggle = (type) => {
    setActiveTab(type);
    if (type === "time") {
      // orderBy(对谁排序, 按照谁排, 顺序)
      setList(orderBy(list, "ctime", "desc"));
    } else {
      setList(orderBy(list, "like", "desc"));
    }
  };

  // 获取评论框焦点
  const commentRef = useRef(null);
  if (!comment.trim()) {
    commentRef.current.focus();
  }

  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{list.length}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {tabs.map((ele) => {
              return (
                <span
                  key={ele.type}
                  className={
                    ele.type === activeTab ? "nav-item active" : "nav-item"
                  }
                  onClick={() => onToggle(ele.type)}
                >
                  {ele.name}
                </span>
              );
            })}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              ref={commentRef}
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            {/* 发布按钮 */}
            <div className="reply-box-send" onClick={onSend}>
              <div className="send-text">发布</div>
            </div>
          </div>
        </div>

        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {list.map((item) => {
            return (
              <div key={item.rpid} className="reply-item">
                {/* 头像 */}
                <div className="root-reply-avatar">
                  <div className="bili-avatar">
                    <img
                      className="bili-avatar-img"
                      alt="avatar"
                      src={item.user.avatar || avatar}
                    />
                  </div>
                </div>

                <div className="content-wrap">
                  {/* 用户名 */}
                  <div className="user-info">
                    <div className="user-name">{item.user.uname}</div>
                  </div>
                  {/* 评论内容 */}
                  <div className="root-reply">
                    <span className="reply-content">{item.content}</span>
                    <div className="reply-info">
                      {/* 评论时间 */}
                      <span className="reply-time">{item.ctime}</span>
                      {/* 喜欢 */}
                      <span className="reply-like">
                        <i
                          className={
                            item.action === 1
                              ? "icon like-icon liked"
                              : "icon like-icon"
                          }
                          onClick={() => onLike(item.rpid)}
                        />
                        <span>{item.like}</span>
                      </span>
                      {/* 不喜欢 */}
                      <span className="reply-dislike">
                        <i
                          className={
                            item.action === 2
                              ? "icon dislike-icon disliked"
                              : "icon dislike-icon"
                          }
                          onClick={() => onDislike(item.rpid)}
                        />
                      </span>
                      {user.uid === item.user.uid && (
                        <span
                          className="delete-btn"
                          onClick={() => onDelete(item.rpid)}
                        >
                          删除
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {list.length === 0 && <div className="reply-none">暂无评论</div>}
      </div>
    </div>
  );
};

export default App;
