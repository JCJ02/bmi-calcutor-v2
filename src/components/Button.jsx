const Button = ({children, buttonStyle, onClick}) => {
  return (
    <>
        <button 
            className={`font-poppins text-[#F6F5F5] text-xs md:text-md lg:text-lg px-[2rem] py-[0.5rem] rounded-full ${buttonStyle}`}
            onClick={onClick}
        >
            {children}
        </button>
    </>
  )
}

export default Button