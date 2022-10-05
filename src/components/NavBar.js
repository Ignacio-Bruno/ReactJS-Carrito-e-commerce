import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import './CartWidget.css';

const NavBar = () => {
    return (
        <Navbar bg="warning" className="nav-height" variant="light">
        <Container>
            <Navbar.Brand className="drops" as={Link} to='/'>
            DropsBA
            </Navbar.Brand>
            <Nav className="">
                <NavLink as={Link} to='/category/hombre'>Hombre</NavLink>
                <Nav.Link as={Link} to='/category/mujer'>Mujer</Nav.Link>
                <Nav.Link as={Link} to='/category/unisex'>UniSex</Nav.Link>
            </Nav>
            <CartWidget />
        </Container>
        </Navbar>
    )
}
export default NavBar;