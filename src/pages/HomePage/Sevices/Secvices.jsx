import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Secvices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section className="mt-20">
            <div className="section-title mb-12 md:w-1/2 mx-auto text-center">
                <h3 className='font-bold text-xl mb-5 text-[#FF3811]'>Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="mt-5">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service=> <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Secvices;