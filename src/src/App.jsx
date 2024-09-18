import { Link } from "react-router-dom"
import logo from './assets/Logo.png'
import './app.scss'
import frame from './assets/Frame.png'
function App() {
    return (
        <div className="container">
            <div className="container-box">
                <nav>
                    <div className="navbar-text">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="text">
                            <Link className="link">About</Link>
                            <Link className="link">Gallery</Link>
                            <Link className="link">Piricing</Link>
                            <Link className="link">Faq</Link>
                            <Link className="link">Benefits</Link>
                        </div>
                    </div>
                    <div className="navbar-button-div">
                        <button>Sign In</button>
                        <button>Sign Up</button>
                    </div>
                </nav>
                <main>
                    <div className="main1">
                        <div className="main-text1">
                            <p>Many reasons to get up and start to get back in the business </p>
                        </div>
                        <div className="main-text2">
                            <p>The harder you work for something, the greater you’ll feel when you achieve it.</p>
                        </div>
                        <div className="main-button">
                            <button>Learn More</button>
                            <button>Demo</button>
                        </div>
                    </div>
                    <div className="main2">
                        <img src={frame} alt="" />
                    </div>
                </main>
            </div>
        </div>
    )
}
export default App  