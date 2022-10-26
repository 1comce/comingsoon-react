import React from 'react';
export default function LoginForm() {
    return (
        <div className='login-js'>
            <div className='input-form'>
                <div className="pop-up py-5">
                    <button className='btn btn-danger float-right font-2rem' type='button'  onClick={()=>{
                    document.querySelector('.login-js').classList.remove('open-popup')
                     }}>Close<i className="fa fa-times" aria-hidden="true"></i>
                    </button>                  
                    <div className='font-2rem'>Đăng Nhập</div>
                    <form>
                    <div className="input-group input-group-lg py-4">
                        <input type="email" className="form-control" placeholder='email' id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                        <div id="emailHelp" className="form-text font-2rem">We'll never share your email with anyone else.</div>
                    </div>
                    <button type="submit" className="btn btn-primary font-2rem">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
