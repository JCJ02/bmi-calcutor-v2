import { IoClose } from "react-icons/io5";

const Modal = ({openModal, closeModal, children}) => {
  return (
    <>
      <div 
        className={`fixed inset-0 flex justify-center items-center transition-colors ${openModal ? "visible bg-black/50" : "invisible"}`}
        onClick={closeModal}
      >
        <div 
          className="bg-[#4592AF] relative flex flex-col px-[24px] py-[48px] rounded-[8px] w-[360px]"
          onClick={event => event.stopPropagation()}
        >
          <button
            className="absolute top-0 right-0 font-extrabold text-[#F6F5F5] text-3xl my-[6px] mx-[4px]" 
            onClick={closeModal}>
            <IoClose />
          </button>
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal