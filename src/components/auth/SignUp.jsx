import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Segment, Form, Button, Message } from "semantic-ui-react";
import styles from "./signUp.module.css";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e, data) => {
    console.log("~ data", data);

    e.preventDefault();
    console.log(`Submitting Name ${username}`);
    console.log(`Submitting Name ${email}`);
    console.log(`Submitting Name ${password}`);
  };

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

            <Button fluid size="large" color="olive">
              Kaydol
            </Button>
          </Segment>
        </Form>
        <Message>
          Zaten bir haesabınız var mı?<Link to="/login">Giriş Yap</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default SignUp;
