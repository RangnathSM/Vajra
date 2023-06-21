import '../Styles/login.css'
const Login = () => {
    return ( 
        <div className="landing"  >
            <div className="login">
            <div className="section1" >
              <div className="head" >
                <h1>Features</h1>
              </div>
              <div className="digi">
              <div className="digitize">
                <div className="image">
                    <img src="../images/Group 63.svg" alt="" />
                </div>
                <div className="one">
                    <h2>Digitize</h2>
                    <p>A Bird eye view of the entire Biomedical Operations.</p>
                </div>
              </div>
              <div className="track">
                <div className="image">
                    <img src="../images/Group 214.svg" alt="" />
                </div>
                <div className="two">
                    <h2>Track</h2>
                    <p>Track the product life cycle and service history.</p>
                </div>
              </div>
              <div className="bio">
                <div className="image">
                    <img src="../images/Group 216.svg" alt="" />
                </div>
                <div className="three">
                    <h2>Biomedical Budget</h2>
                    <p>Regulate and save budget through analysed data and informed.</p>
                </div>
              </div>
              </div>
            </div>
            <div className="section2">
                <div className="signin">
                    <h1>Sign in</h1>
                </div>
                <hr width='500px' />
        <div className="main">
        <div className="heading">
                    <h1>Sign in to your account</h1>
                </div>
                <div className="inputs">
                    <div className="email">
                        <label>Email Id</label>
                        <input type="email" placeholder="xxxxxxxxxxxx" required />
                    </div>
                    <div className="password">
                        <label>Password</label>
                        <input type="password" placeholder="xxxxxxxxxxxx" required />
                    </div>
                </div>
                <div className="forgot">
                    <h1>Forgot Password</h1>
                </div>
                <div className="btn">
                    <button>Sign in</button>
                </div>
        </div>
                <div className="new">
                    <h5>New to vajra?</h5>
                    <a href="/signup">Sign UP Now</a>
                </div>
            </div>
            
        </div>
        
        </div>
        
     );
}
 
export default Login;