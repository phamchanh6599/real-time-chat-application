import React from "react";

import "./Message.css";

import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user, time }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  const userName = user.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  const renderMessageRight = () => {
    return (
      <div className="Message__right">
        <span className="Message__name">
          {trimmedName} <span className="Message__time">{time} </span>{" "}
        </span>
        <div className="Message__box Message__box-blue">
          <span className="Message__text Message__text-white">
            {ReactEmoji.emojify(text)}
          </span>
        </div>
      </div>
    );
  };

  const renderMessageLeft = () => {
    return (
      <div className="Message__left">
        <span className="Message__name">
          {userName}
          <span className="Message__time">{time} </span>{" "}
        </span>
        <div className="Message__box Message__box-gray">
          <span className="Message__text Message__text-dark">
            {ReactEmoji.emojify(text)}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="Message">
      {isSentByCurrentUser ? renderMessageRight() : renderMessageLeft()}
    </div>
  );
};

export default Message;
