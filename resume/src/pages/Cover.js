import '../components/Cover.css'
import { useState } from 'react';
import Cover1 from '../components/Cover1';
import Cover2 from '../components/Cover2';
import Cover3 from '../components/Cover3';
import Cover4 from '../components/Cover4';
import Cover5 from '../components/Cover5';
import Cover0  from '../components/Cover0';
import {Link} from "react-router-dom";
import { getValue } from '@testing-library/user-event/dist/utils';
function Cover(){
    const [isActive0,setIsActive0]=useState(true);
    const [isActive1,setIsActive1]=useState(false);
    const [isActive2,setIsActive2]=useState(false);
    const [isActive3,setIsActive3]=useState(false);
    const [isActive4,setIsActive4]=useState(false);
    const [isActive5,setIsActive5]=useState(false);
    const [flag, setFlag] = useState(false);

    const [y,sety]=useState({nameField:'',AddressField:'',PhoneField:'',EmailField:'',LinkedInField:'',
    PortfolioField:'', goals:'', dreams:'', qualities:'', intro:''});
   const fetchmydata = (e)=>
   {
        fetch("/api/covers",
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(y)
        })
   }
    const handleform = (e)=>
    {
        e.preventDefault();
        sety({
            nameField: document.getElementById('fullName').value,
            AddressField: document.getElementById('Address').value,
            PhoneField: document.getElementById('phoneNumber').value,
            EmailField: document.getElementById('yourEmail').value,
            LinkedInField: document.getElementById('LinkedIn').value,
            PortfolioField: document.getElementById('Portfolio').value,
            intro: document.getElementById('Intro').value,
            qualities: document.getElementById('Qualities').value,
            dreams: document.getElementById('Dreams').value,
            goals: document.getElementById('Goals').value
                });
        setIsActive5(true);
        setIsActive4(false);
        setFlag(true)
        fetchmydata();
    }

    return(
<div className='page'>
<div className='Header'>
        <h2>Now let's get to know you</h2>
        <h1>Please fill your information</h1>
    </div>
    <div className={isActive0? '' : 'hide'}>
        <Cover0  />
    </div>
    <div className={isActive1? '' : 'hide'}>
        <Cover1  />
    </div>
    <div className={isActive2? '' : 'hide'}>
        <Cover2  />
    </div>
    <div className={isActive3? '' : 'hide'}>
        <Cover3  />

    </div>
    <div className={isActive4? '' : 'hide'}>
        <Cover4  />
    </div>
    <div className={isActive5? '' : 'hide'}>
        <Cover5  />
    </div>
    <div className='Buttons'>
   
     <button className={isActive0 || flag?'but hide':'but'}   onClick={()=>{
        if (isActive1)
        {
            setIsActive0(true);
            setIsActive1(false);
        }
        if(isActive2)
        {
            setIsActive1(true);
            setIsActive2(false);
        }
        if(isActive3)
        {
            setIsActive2(true);
            setIsActive3(false);
        }
        if(isActive4)
        {
            setIsActive3(true);
            setIsActive4(false);
        }
        
        sety({
            nameField: document.getElementById('fullName').value,
            AddressField: document.getElementById('Address').value,
            PhoneField: document.getElementById('phoneNumber').value,
            EmailField: document.getElementById('yourEmail').value,
            LinkedInField: document.getElementById('LinkedIn').value,
            PortfolioField: document.getElementById('Portfolio').value,
            intro: document.getElementById('Intro').value,
            qualities: document.getElementById('Qualities').value,
            dreams: document.getElementById('Dreams').value,
            goals: document.getElementById('Goals').value
                });
     }}>Back</button>
     <button className={isActive4 || flag?'but hide':'but'} onClick={
        ()=>{
            if (isActive0)
            {
                setIsActive0(false);
                setIsActive1(true);
            }
            if(isActive1)
            {
                setIsActive1(false);
                setIsActive2(true);
            }
            if(isActive2)
            {
                setIsActive2(false);
                setIsActive3(true);
            }
            
            if(isActive3)
            {
                setIsActive3(false);
                setIsActive4(true);
            }
            
            sety({
                nameField: document.getElementById('fullName').value,
                AddressField: document.getElementById('Address').value,
                PhoneField: document.getElementById('phoneNumber').value,
                EmailField: document.getElementById('yourEmail').value,
                LinkedInField: document.getElementById('LinkedIn').value,
                PortfolioField: document.getElementById('Portfolio').value,
                intro: document.getElementById('Intro').value,
                qualities: document.getElementById('Qualities').value,
                dreams: document.getElementById('Dreams').value,
                goals: document.getElementById('Goals').value

                    });
        }
        }> Next </button>
        
        <button className={`submitbut ${isActive4? 'active' : 'inactive'}`} onClick={handleform} style={{}}>
            Submit form
        </button>
        <Link to = '/Covers'>
            <button className={!isActive5?'but hide':'buts'}  onClick={
                ()=>{
                    fetchmydata();
                }
            }> View </button>
        </Link>
     </div>
    </div>
 );
}

export default Cover;