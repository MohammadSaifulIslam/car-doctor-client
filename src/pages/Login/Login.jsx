import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import img from '../../assets/images/login/login.svg';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleLoginUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log({ user })
                form.reset();

                //   jwt token
                const loggedUser = user.email;
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify()
                })
                    .then(res => res.json(loggedUser))
                    .then(data => {
                        console.log(data)
                        // warning this is not secure to set jwt token on localstorage, i do it for practice purpose
                        localStorage.setItem('car-access-token', data.token)
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'You successfully login!',
                          })
                          navigate(from)
                    })
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