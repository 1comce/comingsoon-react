import React from 'react';
export default function Middle() {
    return (
        <div id="middle">
            <h1>COMING SOON</h1>
            <hr />
            <p id="count"></p>
                <button className='btn btn-light font-2rem' type='submit' onClick={()=>{
                    document.querySelector('.input-form').classList.add('open-popup')
                }}>Notify me</button>
            <div className='input-form'>
                <div className="pop-up py-5">
                    <button className='btn btn-danger float-right font-2rem' type='button'  onClick={()=>{
                    document.querySelector('.input-form').classList.remove('open-popup')
                     }}>Close<i className="fa fa-times" aria-hidden="true"></i>
                    </button>                  
                    <div className='font-2rem'>We will notify you</div>
                    <form>
                    <div className="input-group input-group-lg py-4">
                        <label for="exampleInputEmail1" className="form-label font-2rem dark-theme">Email address :</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                        <div id="emailHelp" className="form-text font-2rem">We'll never share your email with anyone else.</div>
                    </div>
                    <button type="submit" className="btn btn-primary font-2rem">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
