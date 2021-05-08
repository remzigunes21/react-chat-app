import React from "react";
import { useSelector } from "react-redux";

import Routes from "./Routes";
import { Grid, GridColumn } from "semantic-ui-react";
import SidePanel from "./components/sidePanel/SidePanel";
import ChatPanel from "./components/chatPanel/ChatPanel";

const App = (props) => {
  const currentChannel = useSelector((state) => state.channels.currentChannel);
  //semantic ui ekranı 16 parçaya böler
  return (
    <Grid columns="2" style={{ background: "#eee", height: "110vh" }}>
      <Grid.Row>
        <Grid.Column width={3}>
          <SidePanel />
        </Grid.Column>

        <Grid.Column style={{ background: "#fff" }} width={13}>
          {currentChannel && <ChatPanel currentChannel={currentChannel} />}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default App;
