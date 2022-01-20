/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

import { useUserContext } from "components/camera/users.js";

function Login() {

  const main = React.createRef();

  localStorage.setItem("user_pk", 0);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [usertoken, setUsertoken] = useState();

  const [count, setCount] = useState();

  const { user_pk, setUserpk } = useUserContext();

  let count_temp = 0;

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }
  
  useEffect(() => {
    async function loginrequest(username, password) {
      console.log(username, password);
      fetch(`/rest-auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.key !== undefined) {
            setUsertoken(data.key)
          }
        })
      }
    loginrequest(username, password);
  }, [count]);

  async function getuserid(usertoken) {
    console.log(usertoken);
    fetch(`/apis/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        usertoken:usertoken,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("user_pk", JSON.stringify(data));
        document.location.href = "/";
      })
  }

  function doLogin() {
    console.log("버튼 클릭");
    count_temp = count_temp + 1;
    setCount(count_temp);
  }

  if (usertoken !== undefined) {
    getuserid(usertoken);
  }

  return (
    <>
      <DemoNavbar />
      <main ref={main}>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-info">

          </div>
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">

                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <large> Our Home Training </large>
                    </div>
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Username" type="username" onChange={onUsernameChange} />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            onChange={onPasswordChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor=" customCheckLogin"
                        >
                          <span>자동저장</span>
                        </label>
                      </div>
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="button"
                          onClick = {doLogin}
                        >
                          Sign in
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <Row className="mt-3 justify-content-center">
                  <Col className="text-center" xs="8">
                    <a
                      className="text-light"
                      href="/register-page"
                    >
                      <medium>Create new account</medium>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
}


export default Login;