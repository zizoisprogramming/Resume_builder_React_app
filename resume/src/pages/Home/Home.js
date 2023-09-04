import Navbar from "../../components/Navbar/Navbar";
import "./Home.css"
import ress from "./resumeexample.jpg"
const Home = () =>
{
    return(
        <div className="homePage">
            <div className="Intro">
                    <div id = "title1">Build your resume and boost your</div>
                    <div id = "title2">CAREER.</div>
                <div>
                    <p id = "para1">Having a good resume is essential for getting your dream job. Go on and make use of our amazing site to build yours.</p>
                </div>
            </div>
            <div id = "res">
                <img src = {ress} id = "ph"/>
            </div>
        </div>
    )
}
export default Home