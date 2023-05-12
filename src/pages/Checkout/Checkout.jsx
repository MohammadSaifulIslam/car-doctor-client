import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const serviceData = useLoaderData();
    console.log(serviceData);
    return (
        <div>
            checout page
        </div>
    );
};

export default Checkout;