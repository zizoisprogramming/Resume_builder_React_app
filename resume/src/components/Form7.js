import './Form.css'
import { ReactNode } from 'react';
import { useState } from 'react';
function Form7(){
  const node =document.querySelector('.UL7');
  const [count,setCount]=useState('c');
  const [count2,setCount2]=useState('d');
return(
  
    <div className='form'>
        <h2>
            Hobbies
        </h2>
        <ul className='UL7'>
        </ul>
        <div className='Buttons'>
            <button className='but' onClick={()=>{
                const child=document.querySelector(`.${count.slice(0,-1)}`);
                const Seif=document.querySelector(`.${count2.slice(0,-1)}`);
                setCount(`${count.slice(0,-1)}`)
                setCount2(`${count2.slice(0,-1)}`)
                child.removeChild(Seif);
                node.removeChild(child);
            }}>-</button>

            <button className='but'  onClick={()=>{
        
            const child=document.createElement('li');
            child.classList.add(`${count}`);
            setCount(`${count+'c'}`);
            const Seif = document.createElement('input');
            Seif.classList.add('skill')
            Seif.classList.add(`${count2}`)
            setCount2(`${count2+'d'}`)
            Seif.setAttribute('id','hobby')
            child.appendChild(Seif);
            node.appendChild(child);
        //  node.removeChild(child);
            }} >+</button>
        </div>
    </div>
  
);
}
export default Form7;