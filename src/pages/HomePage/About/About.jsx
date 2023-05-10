import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <section className="hero mt-20">
            <div className="hero-content grid md:grid-cols-2 gap-20">
                <div className='relative'>
                <img src={person} className="w-full rounded-lg" />
                <img src={parts} className="w-1/2 rounded-lg absolute -right-8 -bottom-1/4 border-8 border-white" />
                </div>
                <div>
                    <h3 className='font-bold text-xl mb-5 text-[#FF3811]'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="mt-6 mb-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="mb-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="my-btn">Get More Info</button>
                </div>
            </div>
        </section>
    );
};

export default About;