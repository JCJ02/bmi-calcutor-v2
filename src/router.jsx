import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import BMI from "./pages/BMI.jsx";
import HelloWorld from "./pages/HelloWorld.jsx";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/bmi-calculator", element: <BMI /> },
    { path: "/hello-world", element: <HelloWorld /> }
]);