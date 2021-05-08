import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { useFirebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import {
  Header,
  Segment,
  Comment,
  Icon,
  Input,
  Form,
  Button,
} from "semantic-ui-react";
import Messages from "./Messages";

const ChatPanel = ({ currentChannel }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [content, setContent] = useState("");

  const fileInputRef = useRef();

  useFirebaseConnect([
    {
      path: `messages/${currentChannel.key}`,
      storeAs: "channelMessages",
    },
  ]);

  const firebase = useFirebase();
  const profile = useSelector((state) => state.firebase.profile);
  const currentUserId = useSelector((state) => state.firebase.auth.uid);
  const channelMessages = useSelector(
    (state) => state.firebase.ordered.channelMessages
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content !== "") {
      const message = {
        content,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: {
          id: currentUserId,
          name: profile.name,
          avatar: profile.avatar,
        },
      };
      firebase.push(`messages/${currentChannel.key}`, message).then(() => {
        setContent("");
      });
    }
  };

  const uploadMedia = (e) => {};

  return (
    <>
      <Segment clearing>
        <Header as="h3" floated="left">
          <span>
            <Icon name="hashtag" />
            {currentChannel.name}
          </span>
        </Header>
        <Header as="h3" floated="right">
          <Input
            size="mini"
            name="searchTerm"
            icon="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Header>
      </Segment>
      <Segment
        style={{ position: "fixed", top: 55, bottom: 70, width: "81%" }}
        basic
      >
        <Comment.Group
          style={{
            height: "80vh",
            overflowY: "auto",
            maxWidth: "100%",
          }}
        >
          {channelMessages &&
            channelMessages.map(({ key, value }) => (
              <Messages key={key} message={value} />
            ))}
        </Comment.Group>
      </Segment>{" "}
      <Segment
        style={{
          position: "fixed",
          bottom: 0,
          width: "85%",
          display: "flex",
        }}
      >
        <Button icon onClick={() => fileInputRef.current.click()}>
          <Icon name="send" />
          <input
            name="file"
            type="file"
            ref={fileInputRef}
            onChange={uploadMedia}
          />
        </Button>
        <Form onSubmit={handleSubmit} style={{ flex: "1" }}>
          <Input
            fluid
            name="message"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            labelPosition="left"
            placeholder={`#${currentChannel?.name} kanalına mesaj gönder`}
          />
        </Form>
      </Segment>{" "}
    </>
  );
};

export default ChatPanel;
