import React, { useState } from "react";
import {
  Header,
  Icon,
  Image,
  Menu,
  Popup,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import ChannelList from "../channels/ChannelList";
import CreateChannelForm from "../channels/CreateChannelForm";
import UserPanel from "../userPanel/UserPanel";

const SidePanel = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("#22194d");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Menu
        vertical
        inverted
        secondary
        fixed="left"
        style={{
          width: "280px",
          fontSize: "1.2rem",
          background: color,
          height: "100vh",
        }}
      >
        <Menu.Item>
          <UserPanel />
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>
            Kanallar
            <span style={{ float: "right" }}>
              <Popup
                content="Yeni kanal oluştur"
                trigger={<Icon name="add" onClick={(event) => handleOpen()} />}
              />
            </span>
          </Menu.Header>
          <ChannelList />
        </Menu.Item>
      </Menu>
      <CreateChannelForm
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
      />
    </>
  );
};

export default SidePanel;
