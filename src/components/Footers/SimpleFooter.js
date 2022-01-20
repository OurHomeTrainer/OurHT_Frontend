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
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>


            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  2021{" "}

                  중앙대 캡스톤 OurHomeTrainer

                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">




                  <NavItem>
                    <NavLink
                      href="https://github.com/OurHomeTrainer"
                      target="_blank"
                    >
                      Visit Our Github
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      href="https://github.com/byeongdori"
                      target="_blank"
                    >
                      김병주
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://github.com/wnsgud0428"
                      target="_blank"
                    >
                      박준형
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://github.com/quadbeats"
                      target="_blank"
                    >
                      조성규
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
