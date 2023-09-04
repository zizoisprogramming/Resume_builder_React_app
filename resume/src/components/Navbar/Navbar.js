import {Link} from "react-router-dom";
import "./Navbar.css";

import React, { useState, useEffect,useRef } from "react";
const Navbar = () =>
{
    const [openRes, setOpenRes] = useState(false);
    const [openCov, setOpenCov] = useState(false);
    let menu = useRef()
    let menu2 = useRef()
    useEffect(()=>
    {
        let click = (e)=>
        {
            if(!menu.current.contains(e.target))
            {
                setOpenRes(false);
            }
            if(!menu2.current.contains(e.target))
            {
                setOpenCov(false);
            }
        }
        document.addEventListener("mousedown",click)
    })
    return(
        <nav className="Nav">
            <label id = "logo">Build.io</label>
            <div className="links" >
                <ul>
                    <li>
                        <Link to="/" style={{textDecoration:'none',color:"black"}}>Home</Link>
                    </li>
                    <li>
                        <div className="trigResume" onClick={()=>{setOpenRes(!openRes)}}>
                            Resume
                        </div>
                        <div className={`dropdownresume ${openRes? 'active' : 'inactive'}`} ref = {menu}>
                            <ul>
                                <DropDownItem name = "Build new resume." id = "resume1" linkto = '/Resume'/>
                                <DropDownItem name = "View." id = "resume2" linkto = '/Resumes'/>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="trigCov" onClick={()=>{setOpenCov(!openCov)}} id = "try">
                            Cover
                        </div>
                        <div className={`dropdowncov ${openCov? 'active' : 'inactive'}`} ref = {menu2}>
                            <ul>
                                <DropDownItem name = "Build new Cover." id = "cov1" linkto = '/Cover' />
                                <DropDownItem name = "View." id = "cov2" linkto = '/Covers'/>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/about" style={{textDecoration:'none',color:'black'}}>About</Link>
                    </li>
                    <li>
                        <a href="./" download="ziad Samer_compressed (1).pdf">
                            <button style={{textDecoration:'none'}} id = "download">Download CV</button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
function DropDownItem({name,id2,linkto})
{
    return(
        <li id = {id2} >
            <Link to = {linkto} style={{textDecoration:'none',color:"black"}}>{name}</Link>
        </li>
    );
}
export default Navbar