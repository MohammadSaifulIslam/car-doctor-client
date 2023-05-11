import React from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='mt-20 grid md:grid-cols-2 gap-6'>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <form className='p-16 border border-[#E8E8E8] rounded-xl'>
                <h2 className='text-3xl font-bold text-center mb-5'>Login</h2>
                <div className="form-control mt-5">
                    <label className="label">
                        <span className="text-lg font-semibold">Email</span>
                    </label>
                    <label className="">
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control mt-5">
                    <label className="label">
                        <span className="text-lg font-semibold">Confirm Password</span>
                    </label>
                    <label className="">
                        <input type="password" placeholder="Your Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <button type="submit" className='my-btn w-full mt-7'>Sign In</button>
            <p className='text-center my-6'>Have an account? <Link to='/register' className='underline text-[#FF3811] cursor-pointer'>Sign Up</Link></p>
            </form>
        </div>
    </div>
    );
};

export default Login;