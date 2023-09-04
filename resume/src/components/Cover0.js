import './Cover.css'
function Cover0(){
   
    return(
        <div className='cover'>
            <ul className='UL1'>
                <li>
                <div className='entry'>
            <label for="fullName"><h3>name</h3></label>
            <input  type='text'  className='text' id='fullName'  required  />
            </div>
                </li>
            <li>
            <div className='entry'>
            <label for="Address"><h3>Address</h3></label>
            <input  type='text'  className='text'  id='Address' />
            </div>
            </li>
           <li>
           <div className='entry'>
            <label for="phoneNumber"><h3>Phone Number</h3></label>
            <input  type='text'  className='text'  id='phoneNumber' />
            </div>
           </li>
           <li>
           <div className='entry'>
            <label for="yourEmail"><h3>Your Email</h3></label>
            <input  type='email'  className='text'  id='yourEmail' />
            </div>
           </li>
            <li>
            <div className='entry'>
            <label for="LinkedIn"><h3>LinkedIn (if exists)</h3></label>
            <input  type='text'  className='text' id='LinkedIn'  />
            </div>
            </li>
            <li>
            <div className='entry'>
            <label for="Portfolio"><h3>Your Portfolio (if exists)</h3></label>
            <input  type='text'  className='text' id='Portfolio'  />
            </div>
            </li>
            </ul>
            </div>
            
    );
}
export default Cover0;