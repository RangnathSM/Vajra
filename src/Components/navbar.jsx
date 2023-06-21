import '../Styles/navbar.css'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="inside">
            <div className="logo">
                <img src="../images/logo 1.svg" alt="" />
            </div>
            <div className="navlinks">
            <div className="link">
                <a  href="/">HOME</a>
            </div>
            <div className="number">
                <h5>+91 8971580265</h5>
            </div>
            <div className="home">
                <img src="../images/Vector (14).svg" alt="" />
            </div>
            </div>
            </div>
        </div>
     );
}
 
export default Navbar;