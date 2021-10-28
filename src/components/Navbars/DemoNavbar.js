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
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                OURHT
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >

                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">운동시작</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/squat-page" tag={Link}>
                        스쿼트
                      </DropdownItem>
                      <DropdownItem to="/pushup-page" tag={Link}>
                        팔굽혀펴기
                      </DropdownItem>
                      <DropdownItem to="/plank-page" tag={Link}>
                        플랭크
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">결과분석</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/landing-page" tag={Link}>
                        추가할거
                      </DropdownItem>
                      <DropdownItem to="/profile-page" tag={Link}>
                        생각하면
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        됨
                      </DropdownItem>
                      <DropdownItem to="/register-page" tag={Link}>
                        TBD
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>

                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/OurHomeTrainer"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Github 연결하기
                    </UncontrolledTooltip>

                  </NavItem>


                  <NavItem className="d-none d-lg-block ml-lg-3" >
                    <Link to="/info">
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                      >

                        {/*<span className="btn-inner--icon">
                          <i className="fa fa-cloud-download mr-2" />
                        </span> 아이콘 나중에 추가해야함
    */}
                        <span className="nav-link-info ml-1">
                          내정보
                        </span>
                      </Button>

                    </Link>
                  </NavItem>

                  <NavItem className="d-none d-lg-block ml-lg-1">
                    <Link to="/login-page">
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                      >
                        {/*<span className="btn-inner--icon">
                          <i className="fa fa-cloud-download mr-2" />
                        </span> 아이콘 나중에 추가해야함
    */}
                        <span className="nav-link-inner--text ml-1">
                          로그인
                        </span>
                      </Button>
                    </Link>
                  </NavItem>




                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
