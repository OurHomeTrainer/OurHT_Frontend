import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    return (
        <div className="Navigation">
            <Navbar bg="dark" variant="dark" padding="100px">
                <Container fluid>


                    <Navbar.Brand href="/">홈트하자</Navbar.Brand>

                    <Nav className="me-auto" padding="500px">
                        <Nav.Link href="#squat">스쿼트</Nav.Link>
                        <Nav.Link href="/result">결과</Nav.Link>
                        {/* navlink쓰면 새로고침함 */}

                        <Nav.Link href="#pushup">팔굽혀펴기</Nav.Link>

                    </Nav>
                    <Nav>
                        <Link to="/info">내정보</Link>
                        <Nav.Link href="#TBD">
                            여긴뭐넣지
                        </Nav.Link>
                    </Nav>
                </Container>

            </Navbar>
        </div >
    );
}

export default Navigation;

