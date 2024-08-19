import { useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const Contact = () => {
    useEffect(() => {
        document.title = "Contact";
    }, []);
  return (
    <>
        <NavigationBar />
        <section className="bg-[#F1F1F1] flex justify-center items-center h-screen w-full">
            <h1>Contact</h1>
        </section>
        <Footer />
    </>
  )
}

export default Contact