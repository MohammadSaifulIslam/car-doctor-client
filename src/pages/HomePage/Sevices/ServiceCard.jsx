import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {
    const { _id, title, img, price} = service
    return (
        <div className="card card-compact p-6 border border-[#E8E8E8] bg-base-100 ">
        <figure><img src={img} alt="Shoes" className='h-52 rounded-lg'/></figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className='font-bold text-xl text-[#FF3811] flex justify-between'>
            <p>Price: {price}</p>
            <Link to={`/checkout/${_id}`}><ArrowRightIcon className="h-6 w-6 cursor-pointer" /></Link>
          </div>
         
        </div>
      </div>
    );
};

export default ServiceCard;