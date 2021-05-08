import React from "react";
import moment from "moment";
import { Comment, Image } from "semantic-ui-react";
import styles from "./message.module.css";

const Messages = ({ message }) => {
  console.log("🚀 ~ file: Messages.jsx ~ line 7 ~ Messages ~ message", message);
  const timeFromTimestamp = (value) => moment(value).fromNow();
  return (
    <Comment>
      <Comment.Avatar src={message.user.avatar} />
      <Comment.Content>
        <Comment.Author as="a">{message.user.name}</Comment.Author>
        <Comment.Metadata>
          <div>{timeFromTimestamp(message.timestamp)}</div>
        </Comment.Metadata>
        <Comment.Text>{message.content}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
};

export default Messages;
