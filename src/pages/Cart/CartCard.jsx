import React from 'react';


const CartCard = ({ booking,handleDeleteService,handleConfirmStatus }) => {
    const {_id, image, date, service, price } = booking;


    return (
        <tr>
            <th>
                <button onClick={()=> handleDeleteService(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td className='font-bold'>
                {service}
            </td>
            <td>
                {date}
            </td>
            <td>{price}</td>
            <th>
                {
                    booking?.status ? <button className='my-btn'>Approved</button> :
                <button onClick={()=> handleConfirmStatus(_id)} className="my-btn">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default CartCard;