import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import img from '../../assets/images/login/login.svg';

const Register = () => {
    const {user, createUser} = useContext(AuthContext)
    console.log({user})
    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log({ createdUser })
                form.reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You successfully register!',
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
                <form onSubmit={handleCreateUser} className='p-16 border border-[#E8E8E8] rounded-xl'>
                    <h2 className='text-3xl font-bold text-center mb-5'>SignUp</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Name</span>
                        </label>
                        <label className="">
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full" />
                        </label>
                    </div>
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
                    <button type="submit" className='my-btn w-full mt-7'>Sign Up</button>
                    <p className='text-center my-6'>Already have an account? <Link to='/login' className='underline text-[#FF3811] cursor-pointer'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;