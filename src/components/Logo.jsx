import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({logoStyle}) => {
  return (
    <>
        <Link 
            className="font-mono text-md md:text-xl lg:text-2xl text-[#F6F5F5] hover:scale-110 duration-500"
            to={"/"}
        >
            <b className="text-[#33313B]">bmi</b>Calculator
        </Link>
    </>
  )
}

export default Logo