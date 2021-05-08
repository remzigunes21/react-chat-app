import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Segment, Form, Button, Message } from "semantic-ui-react";
import styles from "./signIn.module.css";
import { useForm } from "react-hook-form";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting Name ${email}`);
    console.log(`Submitting Name ${password}`);
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
              Giriş Yap
            </Button>
          </Segment>
        </Form>
        <Message>
          Yeni misin?<Link to="/register">Hesap Oluştur</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default SignIn;
