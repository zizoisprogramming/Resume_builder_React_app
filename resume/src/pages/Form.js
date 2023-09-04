import '../components/Form.css'
import { useState } from 'react';
import {Link} from "react-router-dom";

import Form1 from '../components/Form1';
import Form2 from '../components/Form2';
import Form3 from '../components/Form3';
import Form4 from '../components/Form4';
import Form5 from '../components/Form5';
import Form6 from '../components/Form6';
import Form7 from '../components/Form7';
import Form8 from '../components/Form8';

import Resumes from '../components/Resumes/Resumes';
import { getValue } from '@testing-library/user-event/dist/utils';
function Form(){
    const [isActive1,setIsActive1]=useState(true);
    const [isActive2,setIsActive2]=useState(false);
    const [isActive3,setIsActive3]=useState(false);
    const [isActive4,setIsActive4]=useState(false);
    const [isActive5,setIsActive5]=useState(false);
    const [isActive6, setIsActive6] = useState(false);
    const [isActive7, setIsActive7] = useState(false);
    const [isActive8, setIsActive8] = useState(false);
    const [flag, setFlag] = useState(false);
    const [x,setx]=useState({nameField:'',AddressField:'',PhoneField:'',EmailField:'',LinkedInField:'',
                            PortfolioField:'',prosum:'',skills:'undefined',InstitutionName:'',
                            startdate:'',enddate:'', languages:'undefined',hobbies:'undefined',
                            workdata:'undefined'});
    function saveText()
    {
        const s= Array.from(document.querySelectorAll('#skill'));
        let z3bola=[]
        for(const z3bolaaa of s)
            z3bola.push(getValue(z3bolaaa))
        return z3bola;
    }
    function saveLanguages()
    {
        const s= Array.from(document.querySelectorAll('#language'));
        let z3bola=[]
        for(const z3bolaaa of s)
            z3bola.push(getValue(z3bolaaa))
        return z3bola;
    }
    function savehobbies()
    {
        const s= Array.from(document.querySelectorAll('#hobby'));
        let z3bola=[]
        for(const z3bolaaa of s)
            z3bola.push(getValue(z3bolaaa))
        return z3bola;
    }
    {/*date,title,workPlace*/}
    const saveWorkdata = () =>
    {
        const date_data = Array.from(document.querySelectorAll('#date'));
        const title_data = Array.from(document.querySelectorAll('#title'));
        const workplace_data = Array.from(document.querySelectorAll('#workPlace'));
        let workdata = []
        let i = 0;
        while(i < date_data.length)
        {
            console.log(i)
            workdata.push(getValue(date_data[i]))
            workdata.push(getValue(title_data[i]))
            workdata.push(getValue(workplace_data[i]))
            i = i + 1
        }
        return workdata;
    }
    
   const fetchmydata = (e)=>
   {
        fetch("/api/resumes",
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(x)
        })
   }
   const savex = () =>
   {
        setx({
            nameField: document.getElementById('fullName').value,
            AddressField: document.getElementById('Address').value,
            PhoneField: document.getElementById('phoneNumber').value,
            EmailField: document.getElementById('yourEmail').value,
            LinkedInField: document.getElementById('LinkedIn').value,
            PortfolioField: document.getElementById('Portfolio').value,
            prosum: document.getElementById('ProSum').value,
            skills: saveText(),
            InstitutionName: document.getElementById('InstitutionName').value,
            startdate: document.getElementById('startdate').value,
            enddate:document.getElementById('enddate').value,
            languages:saveLanguages(),
            hobbies:savehobbies(),
            workdata:saveWorkdata(),
            });
   }
    const handleform = (e)=>
    {
        e.preventDefault();
        setIsActive8(true);
        setIsActive7(false);
        setFlag(true)
        savex();
        fetchmydata();
    }
    return(
<div className='page'>
<div className='Header'>
        <h2>Now let's get to know you</h2>
        <h1>Please fill your information</h1>
    </div>
    <div className={isActive1? '' : 'hide'}>
        <Form1/>
    </div>
    <div className={isActive2? '' : 'hide'}>
        <Form2/>
    </div>

    <div className={isActive3? '' : 'hide'}>
        <Form3/>
    </div>
    <div className={isActive4? '' : 'hide'}>
        <Form4/>
    </div>
    <div className={isActive5? '' : 'hide'}>
        <Form5/>
    </div>
    <div className={isActive6? '' : 'hide'}>
        <Form6/>
    </div>
    <div className={isActive7? '' : 'hide'}>
        <Form7/>
    </div>
    <div className={isActive8? '' : 'hide'}>
        <Form8/>
    </div>
    <div className='Buttons'>
   
     <button className={isActive1 || flag?'but hide':'but'}   onClick={()=>{
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
        if(isActive5)
        {
            setIsActive4(true);
            setIsActive5(false);
        }
        if(isActive6)
        {
            setIsActive5(true);
            setIsActive6(false);
        }
        if(isActive7)
        {
            setIsActive6(true);
            setIsActive7(false);
        }

        savex();
     }}>Back</button>
     <button className={isActive7 || flag?'but hide':'but'}  onClick={
        ()=>{
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
            if(isActive4)
            {
                setIsActive4(false);
                setIsActive5(true);
            }
            if(isActive5)
            {
                setIsActive5(false);
                setIsActive6(true);
            }
            if(isActive6)
            {
                setIsActive6(false);
                setIsActive7(true);
            }
        
            savex();
        }
        }> Next </button>
        
        <button className={`submitbut ${isActive7? 'active' : 'inactive'}`} onClick={handleform} style={{}}>
            Submit form
        </button>
        <Link to = '/Resumes'>
            <button className={!isActive8?'but hide':'buts'}  onClick={
                ()=>{
                    fetchmydata();
                }
            }> View </button>
        </Link>
     </div>
    </div>
 );
}

export default Form;