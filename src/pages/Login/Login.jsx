import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const handleLoginUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log({ loggedUser })
            })
            .catch(error => console.log(error))
    }

    return (

        <div className='mt-20 grid md:grid-cols-2 gap-6'>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <form onSubmit={handleLoginUser} className='p-16 border border-[#E8E8E8] rounded-xl'>
                <h2 className='text-3xl font-bold text-center mb-5'>Login</h2>
                <div className="form-control mt-5">
                    <label className="label">
                        <span className="text-lg font-semibold">Email</span>
                    </label>
                    <label className="">
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control mt-5">
                    <label className="label">
                        <span className="text-lg font-semibold">Confirm Password</span>
                    </label>
                    <label className="">
                        <input type="password" name='password' placeholder="Your Name" className="input input-bordered w-full" />
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