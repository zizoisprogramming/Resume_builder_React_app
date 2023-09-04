import './Form.css'
import { ReactNode } from 'react';
function Form4(){
  const node =document.querySelector('.UL4');
return(
    <div className='form'>
      <h2>
        Work Experience
      </h2>
      <ul className='UL4'>
      </ul>
      <button className='but'  onClick={()=>
      {
        const child=document.createElement('li');
        const grandChild=document.createElement('div');
        grandChild.classList.add('entry');


        const title=document.createElement('input');
        const workPlace=document.createElement('input');
        const date=document.createElement('input');
        date.setAttribute('id','date');


        title.classList.add('text');
        title.classList.add('title');
        title.setAttribute('id','title')


        const workLabel=document.createElement('label')
        workLabel.innerText='Place';
        workLabel.htmlFor='workPlace'
        workLabel.classList.add('h2');
        workPlace.classList.add('text');
        workPlace.setAttribute('id','workPlace');


        const titleLabel=document.createElement('label')
        titleLabel.htmlFor='title';
        titleLabel.innerText='Title';
        titleLabel.classList.add('h2');

        const dateLable=document.createElement('label');
        dateLable.htmlFor='date';
        dateLable.innerText='Date';
        dateLable.classList.add('h2');

        date.classList.add('text');
        date.classList.add('date');
        const kitkat = document.createElement('br')
        grandChild.appendChild(workLabel);
        grandChild.appendChild(workPlace);
        
        grandChild.appendChild(titleLabel)
        grandChild.appendChild(title);
        
        grandChild.appendChild(dateLable);
        grandChild.appendChild(date);
        child.appendChild(grandChild);
        node.appendChild(child);
        }} >+</button>
    </div>
  
);
}
export default Form4;