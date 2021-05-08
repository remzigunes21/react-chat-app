import React from "react";
import Routes from "./Routes";
import { Button } from "semantic-ui-react";

const App = (props) => {
  return (
    <div>
      <Button
        onClick={() => {
          props.history.push("/login");
        }}
      >
        Click
      </Button>
    </div>
  );
};

export default App;
