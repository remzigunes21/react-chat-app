import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { Grid, Segment, Form, Button, Message } from "semantic-ui-react";
import styles from "./signUp.module.css";

const SignUp = (props) => {
  const firebase = useFirebase();
  const [fbErrors, setFbErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e, data) => {
    setLoading(true);
    setFbErrors([]);
    console.log("~ data", data);

    console.log(username, password, email);
    const [first, last] = username.split(" ");
    firebase
      .createUser(
        { email: email, password: password },
        {
          name: username,
          avatar: `https://ui-avatars.com/api/?name=${first}+${last}&background=random`,
        }
      )
      .then((user) => {
        console.log("ussss", user);
      })
      .catch((e) => {
        setFbErrors([{ message: e.message }]);
      })
      .finally(() => {
        setLoading(false);
      });

    e.preventDefault();
  };

  const displayErrors = () =>
    fbErrors.map((item, index) => <p key={index}>{item.message}</p>);

  const handleChangeUser = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      className={styles.container}
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <h1 className={styles.formHeader}>
          ChatApp.<span>io</span>
        </h1>

        <Form size="large" className={styles.form} onSubmit={onSubmit}>
          <Segment>
            <Form.Input
              icon="user"
              iconPosition="left"
              fluid
              value={username}
              onChange={(e) => handleChangeUser(e)}
              placeholder="Kullanıcı Adı"
              type="text"
            />
            <Form.Input
              icon="mail"
              iconPosition="left"
              fluid
              value={email}
              onChange={(e) => handleChangeEmail(e)}
              placeholder="Email Adresi"
              type="email"
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              fluid
              value={password}
              onChange={(e) => handleChangePassword(e)}
              placeholder="şifre giriniz"
              type="password"
            />

            <Button fluid size="large" color="olive" disabled={loading}>
              Kaydol
            </Button>
          </Segment>
        </Form>
        {fbErrors.length > 0 && <Message error>{displayErrors()}</Message>}
        <Message>
          Zaten bir haesabınız var mı?<Link to="/login">Giriş Yap</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default SignUp;
