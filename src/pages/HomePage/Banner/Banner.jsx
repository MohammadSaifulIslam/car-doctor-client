
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
const Banner = () => {
  
    return (
        <section>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full h-[600px]" />
                    <div className="absolute flex items-center pl-10 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                        <div className='text-white space-y-5 md:w-2/6'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p className='text-lg'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='my-btn'>Discover More</button>
                                <button className='outline-btn'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform gap-5 -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="my-btn-circle-white">❮</a>
                        <a href="#slide2" className="my-btn-circle ">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full h-[600px]" />
                    <div className="absolute flex items-center pl-10 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                        <div className='text-white space-y-5 md:w-2/6'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p className='text-lg'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='my-btn'>Discover More</button>
                                <button className='outline-btn'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform gap-5 -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="my-btn-circle-white">❮</a>
                        <a href="#slide3" className="my-btn-circle ">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full h-[600px]" />
                    <div className="absolute flex items-center pl-10 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                        <div className='text-white space-y-5 md:w-2/6'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p className='text-lg'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='my-btn'>Discover More</button>
                                <button className='outline-btn'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform gap-5 -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="my-btn-circle-white">❮</a>
                        <a href="#slide4" className="my-btn-circle ">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full h-[600px]" />
                    <div className="absolute flex items-center pl-10 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                        <div className='text-white space-y-5 md:w-2/6'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p className='text-lg'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="my-btn">Discover More</button>
                                <button className='outline-btn'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform gap-5 -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="my-btn-circle-white">❮</a>
                        <a href="#slide1" className="my-btn-circle ">❯</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;