import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext)
  const serviceData = useLoaderData();
  const { _id, title, img, price } = serviceData;

  const handleCheckOut = event => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const price = form.price.value;

    const booking = {
      customerName: name,
      email,
      date,
      price,
      image: img,
      service: title,
      service_id: _id,
    }
    console.log(booking)

    fetch('http://localhost:5000/bookings', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Success.',
            text: 'Your service added',
          })
        }
      })
  }


  return (
    <>
      <div className="mt-20 p-20 bg-[#F3F3F3] ">
        <form onSubmit={handleCheckOut}>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="form-control mt-5">
              <label className="label">
                <span className="text-lg font-semibold">Name</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  defaultValue={user?.displayName}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control mt-5">
              <label className="label">
                <span className="text-lg font-semibold">Email</span>
              </label>
              <label className="">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  defaultValue={user?.email}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="form-control mt-5">
              <label className="label">
                <span className="text-lg font-semibold">Date</span>
              </label>
              <label className="">
                <input
                  type="date"
                  name="date"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control mt-5">
              <label className="label">
                <span className="text-lg font-semibold">Price</span>
              </label>
              <label className="">
                <input
                  name="price"
                  defaultValue={'$' + price}
                  className="input input-bordered w-full"
                  required
                  type="text"
                />
              </label>
            </div>
          </div>
          <button type="submit" className='my-btn w-full mt-7'>Order</button>
        </form>
      </div>
    </>
  );
};

export default Checkout;
