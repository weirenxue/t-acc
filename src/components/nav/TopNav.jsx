import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
const TopNav = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <div style={{
                color:props.color,
                cursor:"pointer",
                display:props.isHideMenu ? "" : "none" ,
                }} onClick={props.onClick}>
            <i className="fas fa-bars"></i>
            </div>
                <Navbar.Brand
                style={{
                    marginRight:"auto",
                    marginLeft:"auto",
                }}>
                <img
                    alt=""
                    src="/favicon.ico"
                    width="1"
                    height="1"
                    className="d-inline-block align-top"
                />{' '}
                <Link to="/" style={{color:props.color, textDecoration:"none"}}>{props.brandName}</Link>
                </Navbar.Brand>
        </Navbar>
    );
}
export default TopNav;