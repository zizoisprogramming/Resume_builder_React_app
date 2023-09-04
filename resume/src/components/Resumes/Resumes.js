import React from 'react';
import { Component } from 'react';
import "./Resumes.css"
import jsPDF  from 'jspdf';
import html2canvas from 'html2canvas';
import sora from "./imgs-removebg-preview.png"
import loc from "./location.png"
import phon from "./phone.png"
import emal from "./email.png"
import linked from "./linked.png"
import porto from "./portofolio.png"
import uni from "./graduation.png"
import line from "./vertical-line.png"
class Resumes extends Component
{
    
    constructor(props)
    {
        super(props)
        this.state={
            resume:{},
        }
        this.myRef = React.createRef();
    }
    componentDidMount(){
        fetch("/api/resumes").then(res=>res.json()).then(resume=>{this.setState({resume:resume})})
    }
    
    generatepdf = ()=>
    {
        const input = this.myRef.current;
        html2canvas(input).then((canvas)=>
        {
            const imgsData = canvas.toDataURL('imgs-removebg-preview.png')
            const pdf = new jsPDF("p","pt","a5")
            const pdfwidth = pdf.internal.pageSize.getWidth();
            const pdfheight = pdf.internal.pageSize.getHeight();
            const imgwidth = canvas.width;
            const imgheight = canvas.height;
            const ratio = Math.min(pdfwidth/imgwidth, pdfheight/imgheight);
            const imgx = (pdfwidth - imgwidth*ratio) /2;
            const imgY = 30;
            pdf.addImage(imgsData,'png',imgx,imgY,imgwidth*ratio, imgheight*ratio)
            pdf.save('cv.pdf')
        })
        
    }
    obj_converter()
    {
        let i = 0
        var obj = {}
        var arr = []
        while(this.state.resume.workdata && i < this.state.resume.workdata.length)
        {
            obj = {title:this.state.resume.workdata[i +1],place:this.state.resume.workdata[i + 2],date:this.state.resume.workdata[i]}
            i = i + 3
            arr.push(obj)
        }
        return arr;
    }
    render(){
        const skills_items = this.state.resume.skills?.map((skill)=><li>{skill}</li>)
        const langs = this.state.resume.languages?.map((lang)=><li>{lang}</li>)
        const hobis = this.state.resume.hobbies?.map((hobi)=><li>{hobi}</li>)
        const sth = this.obj_converter();
        const workitems = sth?.map((it)=><li><div id  ='pl'>Place: <div id = 'pl-text'> {it.place} </div></div> 
                                             <div id = 'tit'>Title:<div id = 'tit-text'>{it.title} </div></div>
                                             <div id = 'dt'>Date: <div id = 'dt-text'>{it.date} </div></div>
                                             </li>)
        return(
            <div className='Resumewithbutoon'>
            <div className='MyResume' ref = {this.myRef}>
                <div className='Titles' >
                    <div className='text'>
                        <div id = "name">
                            {this.state.resume.nameField}
                        </div>
                        <div id = "summary">
                            Professional summary:
                            <div id = "para">
                                {this.state.resume.prosum}
                            </div>
                        </div>
                    </div>
                    {/*<img src={sora} id = "sora" alt = "Me"/>*/}
                </div>
                <div className='Links'>
                    <div className='links-1'>
                        <div id = 'address'>
                            <img src={loc} id = "sora2" alt = "location"/>
                            <div id = 'address-text'>{this.state.resume.AddressField}</div>
                        </div>
                        <div id = 'phone'>
                            <img src={phon} id = "sora3" alt = "phone"/>
                            <div id = 'phone-text'>{this.state.resume.PhoneField}</div>
                        </div>
                        <div id = 'email'>
                            <img src={emal} id = "sora4" alt = "email"/>
                            <div id = 'email-text'>{this.state.resume.EmailField}</div>
                        </div>
                    </div>
                    <div className='links-2'>
                        <div id = 'linked'>
                            <img src={linked} id = "sora5" alt = "linked-in profile"/>
                            <div id = 'linked-text'>{this.state.resume.LinkedInField}</div>
                        </div>
                        <div id = 'portofolio'>
                            <img src={porto} id = "sora6" alt = "portofolio"/>
                            <div id = 'portofolio-text'>{this.state.resume.PortfolioField}</div>
                        </div>
                    </div>
                </div>
                <div className='container2'>
                    <div className='Skills'>
                        <div id = 'tit2'>
                            Skills:
                        </div>
                        <ul id = "actual-skills">
                            {skills_items}
                        </ul>
                    </div>
                    <div className='Education'>
                        <div id = 'tit3'>
                            Education:
                        </div>
                        <div id = 'instit'>
                            InstitutionName:
                            <div id = 'initname'>
                                {this.state.resume.InstitutionName}
                            </div>
                            <img src={uni} id = 'sora7' alt='university'/>
                        </div>
                        <div id = 'startdate'>
                            Start date: 
                            <div id = 'startdatename'>
                                {this.state.resume.startdate}
                            </div>
                        </div>
                        <div id = 'enddate'>
                            End date:
                            <div id = 'enddatename'>
                                {this.state.resume.enddate}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Container3'>
                    <div id = 'tit4'>
                        Working Experience:
                    </div>
                    <ul>
                        {workitems}
                    </ul>
                </div>
                <div className='Container4'>
                    <div className='Langs'>
                        <div id='tit5'>
                            Languages:
                        </div>
                        <ul>
                            {langs}
                        </ul>
                    </div>
                    <div className='Hobbies'>
                        <div id = 'tit6'>
                            Hobbies:
                        </div>
                        <ul>
                            {hobis}
                        </ul>
                    </div>
                </div>
            </div>
            <button onClick={this.generatepdf} type="primary" style={{textAlign:"center",marginLeft:'640px',
                                                                        backgroundColor:'rgb(22, 114, 114)',borderRadius:'10px'}}>Download Cv</button>
            </div>
        )
    }
}
export default Resumes;
{/*    const [x,setx]=useState({nameField:'',AddressField:'',PhoneField:'',EmailField:'',LinkedInField:'',PortfolioField:'',prosum:'',skills:'undefined'});
 */}