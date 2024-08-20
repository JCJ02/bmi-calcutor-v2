import { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { TypeAnimation } from "react-type-animation";
import Modal from "../components/Modal";

const BMI = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [BMI, setBMI] = useState(0);
  const [classification, setClassification] = useState("");

  const clearFields = () => {
    setHeight(0);
    setWeight(0);
  }

  const [openResult, setOpenResult] = useState(false);

  const result = (event) => {
    event.preventDefault();
    setOpenResult(!openResult);
  }

  const calculateBMI = (event) => {
    event.preventDefault();

    let bmiResult = weight / (height * height);

    if(weight === 0 && height === 0) {
      setBMI("Syntax Error!");
    } else { setBMI(bmiResult.toFixed(2)); }

    if(bmiResult < 16.5) {
      setClassification("Severely Underweight");
    } else if(bmiResult >= 16.5 && bmiResult < 18.5) {
      setClassification("Underweight");
    } else if(bmiResult >= 18.5 && bmiResult < 25) {
      setClassification("Normal");
    } else if(bmiResult >= 25 && bmiResult < 30) {
      setClassification("Overweight");
    } else if(bmiResult >= 30 && bmiResult < 35) {
      setClassification("Obese Class I");
    } else if(bmiResult >= 35 && bmiResult < 40) {
      setClassification("Obese Class II");
    } else if(bmiResult >= 40 && bmiResult < 45) {
      setClassification("Severely Obese");
    } else if(bmiResult >= 45 && bmiResult < 50) {
      setClassification("Morbidly Obese");
    } else if(bmiResult >= 50 && bmiResult < 60) {
      setClassification("Super Obese");
    } else if(bmiResult >= 60) {
      setClassification("Hyper Obese");
    }

    result(event);
    clearFields();
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
              className="font-poppins font-extrabold text-[#4592AF] text-lg md:text-1xl lg:text-3xl"
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
          <div className="flex flex-col items-center gap-5">
            <h1 className="font-poppins font-extrabold text-[#33313B] text-lg md:text-xl lg:text-2xl">BMI <b className="text-[#4592AF]">Calculator</b></h1>
            <form className="bg-[#4592AF] flex flex-col justify-center items-end gap-2 p-[48px] rounded-[4px]">
              <div className="flex justify-center items-center gap-2 font-poppins">
                <label className="text-[#F6F5F5] text-xs md:text-md lg:text-lg">Height:</label>
                <input 
                  className="text-xs md:text-md lg:text-lg p-[4px] w-full" 
                  type="number" 
                  placeholder="Ex. 1.75 M"
                  value={height}
                  onChange={(event) => setHeight(event.target.value)}
                >
                </input>
              </div>
              <div className="flex justify-center items-center gap-2 font-poppins">
                <label className="text-[#F6F5F5] text-xs md:text-md lg:text-lg">Weight:</label>
                <input 
                  className="text-xs md:text-md lg:text-lg p-[4px] w-full" 
                  type="number" 
                  placeholder="Ex. 65 KG"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
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
          </div>
          <Modal openModal={openResult} closeModal={result}>
            <h1 className="font-poppins font=extrabold text-[#F6F5F5] text-xs md:text-md lg:text-lg">BMI: <b className="text-[#008000]">{BMI}</b></h1>
            <h1 className="font-poppins font=extrabold text-[#F6F5F5] text-xs md:text-md lg:text-lg">Category: <b>{classification}</b></h1>
          </Modal>
        </section>
        <Footer />
    </main>
  )
}

export default BMI