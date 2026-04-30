import { useState } from "react";
import avatar from "./assets/avatar.svg";
import classNames from "classnames";
import "./index.css";

/**
 * 兄弟组件通信: 借助共同的父组件充当中介
 *
 * 状态提升: 将需要共享的状态提升到公共父组件中
 */

const defaultFriends = [
  {
    id: "13258165",
    name: "周杰伦",
    avatar,
    dateStr: "刚刚",
    message: "哎哟不错哦",
  },
  {
    id: "36080105",
    name: "许嵩",
    avatar,
    dateStr: "18:30",
    message: "[语言]",
  },
];

// 子组件 A
const Friends = ({ friends, onSelect, chatFriend }) => {
  return (
    <div className="friends">
      {friends.map((ele) => {
        return (
          <div
            onClick={() => onSelect(ele)}
            key={ele.id}
            className={classNames(
              "friend",
              chatFriend.id === ele.id && "selected",
            )}
          >
            <img src={ele.avatar} className="avatar" />
            <div className="info">
              <div className="row">
                <div className="name">{ele.name}</div>
                <div className="date">{ele.dateStr}</div>
              </div>
              <div className="msg">{ele.message}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// 子组件 B
const Chat = ({ friend }) => {
  return (
    <div className="chat-wrapper">
      <div className="header">{friend.name}</div>
      <div className="list"></div>
      <div className="input"></div>
    </div>
  );
};

// 父组件
const App = () => {
  const [friends, setFriends] = useState(defaultFriends);
  const [chatFriend, setChatFriend] = useState(friends[0]);

  const onSelectFriend = (friend) => {
    setChatFriend(friend);
  };

  return (
    <div className="app">
      <Friends
        chatFriend={chatFriend}
        friends={friends}
        onSelect={onSelectFriend}
      />
      <Chat friend={chatFriend} />
    </div>
  );
};

root.render(<App />);
