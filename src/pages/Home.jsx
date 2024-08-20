import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
        <div className="bg-[#F1F1F1] flex justify-center items-center h-screen w-full">
            <section className="flex flex-col justify-center items-center gap-5 max-w-[1280px] px-[5%] xl:px-0">
                <TypeAnimation 
                    sequence={['What is Body Mass Index?', 1000]}
                    wrapper="h1"
                    repeat={Infinity}
                    className="font-poppins font-bold text-1xl md:text-3xl lg:text-5xl text-[#33313B]"
                />
                <p className="font-poppins text-sm md:text-md lg:text-lg text-[#33313B] text-justify md:text-center">
                    The body mass index is an indicator obtained by dividing a person's weight in kilograms by their height squared in meters. It is used to measure body fat, but does not differentiate muscle mass from fat mass.
                </p>
                <Link 
                    className="bg-[#4592AF] font-poppins text-[#F6F5F5] text-xs md:text-md lg:text-lg px-[2rem] py-[0.5rem] rounded-full hover:scale-110 duration-500"
                    to={"/bmi-calculator"}
                >
                    Get Started
                </Link>
            </section>
        </div>
    </>
  )
}

export default Home