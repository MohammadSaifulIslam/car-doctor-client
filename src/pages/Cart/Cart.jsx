import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import CartCard from './CartCard';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDeleteService = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => console.log(data))

                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }

                const remaining = bookings.filter(booking => booking._id !== id);
                setBookings(remaining)
            }
        })

    }

    const handleConfirmStatus = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method : 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Your service booking approved!',
                  })
            const remaining = bookings.filter(booking=> booking._id !== id);
            const updated = bookings.filter(booking => booking._id === id)
            updated.status = 'confirm';
            const newBookings = [updated, ...remaining]
            setBookings(newBookings);
            }
        })
    }
    return (
        <div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <CartCard
                            key={booking._id}
                            booking={booking}
                            handleDeleteService={handleDeleteService}
                            handleConfirmStatus={handleConfirmStatus}
                        ></CartCard>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Cart;