import React from "react";
import {Container, NavLink, Navbar, Button} from "react-bootstrap";
import {StyledNav} from "./styles";
import constants from "../../constants";
import {Link, useNavigate} from "react-router-dom";

const menu = [
    {path: constants.ROUTES.COURSE_LIST, text: "Course List"},
    {path: constants.ROUTES.COURSE_TYPE, text: "Course Type List"}
]

const NavBarComp = () => {
    const navigate = useNavigate();
    return (
        <Navbar bg="light" expand="light" sticky={"top"}>
            <Container>
                <Navbar.Brand onClick={() => navigate(constants.ROUTES.DASHBOARD)} style={{cursor: "pointer"}}>Enigma Course</Navbar.Brand>
                <StyledNav>
                    {menu?.map((item) => (
                            <Link className="nav-link mx-3" to={item.path}>{item.text}
                            </Link>
                        )
                    )}
                </StyledNav>
            </Container>
        </Navbar>
    );
}

export default NavBarComp;
