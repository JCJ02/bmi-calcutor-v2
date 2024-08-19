import { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { TypeAnimation } from "react-type-animation";

const BMI = () => {

  const calculateBMI = event => {
    event.preventDefault();
  }

  useEffect(() => {
    document.title = "BMI Calculator";
  }, []);

  return (
    <main className="bg-[#EEEEEE]">
        <NavigationBar />
        <section className="flex flex-col-reverse md:flex-col lg:flex-row justify-center lg:justify-around items-center gap-5 md:gap-10 h-screen m-auto max-w-[1280px]">
          <div className="flex flex-col items-start gap-2 px-[5%]">
            <TypeAnimation 
              sequence={['How to calculate your BMI?', 1000]}
              wrapper="h1"
              repeat={Infinity}
              className="font-poppins font-extrabold text-lg md:text-1xl lg:text-3xl"
            />
            <p className="font-poppins max-w-[480px] text-justify text-xs md:text-md lg:text-lg">
              The body mass index (BMI) calculator estimates the amount of body fat a person has in relation to age, height, and weight.
              <br />
              <br />
              <b>The Body Mass Index (BMI)</b> can be calculated using the following formulas:
              <br />
              <br />
              <b>1. Metric Units:</b> BMI = weight (kg) / height² (meters)
              <br />
              <b>2. US Units:</b> BMI = weight (lb) / height² (inches) * 703
            </p>
          </div>
          <form className="bg-[#4592AF] flex flex-col justify-center items-end gap-2 p-[48px] rounded-[4px]">
            <div className="flex justify-center items-center gap-2 font-poppins">
              <label className="text-[#F6F5F5] text-xs md:text-md lg:text-lg">Height:</label>
              <input 
                className="text-xs md:text-md lg:text-lg p-[4px] w-full" 
                type="number" 
                placeholder="Ex. 1.75 M"
              >
              </input>
            </div>
            <div className="flex justify-center items-center gap-2 font-poppins">
              <label className="text-[#F6F5F5] text-xs md:text-md lg:text-lg">Weight:</label>
              <input 
                className="text-xs md:text-md lg:text-lg p-[4px] w-full" 
                type="number" 
                placeholder="Ex. 65 KG"
              >
              </input>
            </div>
            <Button 
              buttonStyle={"bg-[#33313B] w-full mt-[12px] hover:scale-105 duration-300"}
              onClick={calculateBMI}
            >
              Calculate
            </Button>
          </form>
        </section>
        <Footer />
    </main>
  )
}

export default BMI