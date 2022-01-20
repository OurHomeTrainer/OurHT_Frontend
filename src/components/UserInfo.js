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
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Toast,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserInfo() {
  const main = React.createRef();

  let current_user_pk = localStorage.getItem("user_pk");

  const [newuserage, setNewuserage] = useState();
  const [newuserheight, setNewuserheight] = useState();
  const [newuserweight, setNewuserweight] = useState();

  const onUserageChange = (e) => {
    setNewuserage(e.target.value);
  };

  const onUserheightChange = (e) => {
    setNewuserheight(e.target.value);
  };

  const onUserweightChange = (e) => {
    setNewuserweight(e.target.value);
  };

  async function userinfoupdate(
    user_pk,
    newuserage,
    newuserheight,
    newuserweight
  ) {
    fetch(`http://127.0.0.1:8000/apis/users/updateuserinfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        userid: user_pk,
        userage: newuserage,
        userheight: newuserheight,
        userweight: newuserweight,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.location.href = "/info";
      });
  }

  function doUserinfoupdate() {
    if (
      newuserage === undefined ||
      newuserheight === undefined ||
      newuserweight === undefined
    ) {
      toast.error("입력하지 않은 항목이 있습니다, 추가해주세요.", {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      userinfoupdate(current_user_pk, newuserage, newuserheight, newuserweight);
    }
  }

  return (
    <>
      <DemoNavbar />
      <main ref={main}>
        <ToastContainer />
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <span className="bold">내 정보를 수정하세요</span>
                    </div>
                    <Form role="form">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-fat-add" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Age"
                            type="text"
                            onChange={onUserageChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-fat-add" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Height"
                            type="integer"
                            autoComplete="off"
                            onChange={onUserheightChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-fat-add" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Weight"
                            type="integer"
                            autoComplete="off"
                            onChange={onUserweightChange}
                          />
                        </InputGroup>
                      </FormGroup>

                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="primary"
                          type="button"
                          onClick={doUserinfoupdate}
                        >
                          수정한 정보 저장하기
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
}

export default UserInfo;
