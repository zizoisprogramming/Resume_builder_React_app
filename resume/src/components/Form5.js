import './Form.css'
const Form5= () =>{
return(
    <div className='form5'>
        <h2>Education</h2>
        <ul className='UL1'>
            <li>
                <div className='entry'>
                    <label for="Name"><h3>Institution Name</h3></label>
                    <input  type='text'  className='text' id='InstitutionName'  required  />
                </div>
            </li>
            <li>
                <div className='entry'>
                    <label for="start"><h3>Start-date</h3></label>
                    <input  type='date'  className='date'  id='startdate' />
                </div>
            </li>
            <li>
                <div className='entry'>
                    <label for="end-date"><h3>Expected end date</h3></label>
                    <input  type='date'  className='date'  id='enddate' />
                </div>
            </li>
        </ul>
    </div>
);
}
export default Form5;