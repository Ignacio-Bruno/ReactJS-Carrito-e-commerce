import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css';

const NavBar = () => {
    return (
        <Navbar bg="warning" className="nav-height" variant="light">
        <Container>
            <Navbar.Brand className="drops" href="#home">
            DropsBA
            </Navbar.Brand>
            <Nav>
                <Nav.Link href="#hombre">Hombre</Nav.Link>
                <Nav.Link href="#mujer">Mujer</Nav.Link>
                <Nav.Link href="#unisex">UniSex</Nav.Link>
            </Nav>
            <CartWidget />
        </Container>
        </Navbar>
    )
}
export default NavBar;