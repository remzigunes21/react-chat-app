import React from "react";
import moment from "moment";
import { Comment, Image } from "semantic-ui-react";
import styles from "./message.module.css";

const Messages = ({ message }) => {
  const isMedia = (message) => message.hasOwnProperty("image");
  const timeFromTimestamp = (value) => moment(value).fromNow();
  return (
    <Comment>
      <Comment.Avatar src={message.user.avatar} />
      <Comment.Content>
        <Comment.Author as="a">{message.user.name}</Comment.Author>
        <Comment.Metadata>
          <div>{timeFromTimestamp(message.timestamp)}</div>
        </Comment.Metadata>
        {isMedia(message) ? (
          <Image src={message.image} className={styles.image} />
        ) : (
          <Comment.Text>{message.content}</Comment.Text>
        )}
      </Comment.Content>
    </Comment>
  );
};

export default Messages;
