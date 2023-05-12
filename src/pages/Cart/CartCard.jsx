import React from 'react';

const CartCard = ({ booking }) => {
    const { image, date, service, price } = booking;


    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
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
                <button className="my-btn">pending</button>
            </th>
        </tr>
    );
};

export default CartCard;