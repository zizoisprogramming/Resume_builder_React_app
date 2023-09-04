import React from 'react';
import { Component } from 'react';
import "./Covers.css"
import jsPDF  from 'jspdf';
import html2canvas from 'html2canvas';
class Covers extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            cover:{},
        }
        this.myRef = React.createRef();
    }
    componentDidMount(){
        fetch("/api/covers").then(res=>res.json()).then(cover=>{this.setState({cover:cover})})
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
        while(this.state.cover.workdata && i < this.state.cover.workdata.length)
        {
            obj = {title:this.state.cover.workdata[i +1],place:this.state.cover.workdata[i + 2],date:this.state.cover.workdata[i]}
            i = i + 3
            arr.push(obj)
        }
        return arr;
    }
    render() {
        const sth = this.obj_converter();
        return (
            <div>
            <div className="Cover" ref={this.myRef}>
                <div className="Header">
                    <div className="ContactInfo">
                        <h1 id="name">{this.state.cover.nameField}</h1>
                        <p>{this.state.cover.AddressField}</p>
                        <p>Phone: {this.state.cover.PhoneField}</p>
                        <p>Email: {this.state.cover.EmailField}</p>
                    </div>
                    <div className="Footer">
                        <p>LinkedIn: {this.state.cover.LinkedInField}</p>
                        <p>Portfolio: {this.state.cover.PortfolioField}</p>
                    </div>
                </div>
                <div className="CoverContent">
                    <div className="Section">
                        <p>{this.state.cover.intro}</p>
                    </div>
                    <div className="Section">
                        <p>{this.state.cover.dreams}</p>
                    </div>
                    <div className="Section">
                        <p>{this.state.cover.goals}</p>
                    </div>
                    <div className="Section">
                        <p>{this.state.cover.qualities}</p>
                    </div>
                </div>

            </div>
            <button onClick={this.generatepdf} className="DownloadButton hide-on-print">Download Cover Letter</button>
            </div>
        );
    }
    
    
}
export default Covers;
{/*   goals:'', dreams:'', qualities:'', intro:''
 */}