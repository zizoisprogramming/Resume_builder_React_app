import './Form.css'
import { ReactNode } from 'react';
function Form3(){
  const node =document.querySelector('.UL3');
return(
    <div className='form'>
           <h2>
            Skills
           </h2>
           <ul className='UL3'>
            </ul>
           <button className='but'  onClick={()=>{
           const child=document.createElement('li');
          const Seif = document.createElement('input');
         Seif.classList.add('skill')
         Seif.setAttribute('id','skill')
          child.appendChild(Seif);
           node.appendChild(child);
           }} >+</button>
    </div>
  
);
}
export default Form3;