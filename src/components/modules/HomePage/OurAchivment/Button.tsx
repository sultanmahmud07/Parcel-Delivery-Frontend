import { FaHeart } from "react-icons/fa";

const Button = () => {

  return (
    <>
      <button  className="transition-transform duration-500 hover:scale-105 bg-primary flex items-center gap-2 md:text-md rounded-md hover:bg-opacity-90 text-white p-2 md:p-3 md:px-6 font-semibold">
        Donate Now
        <span><FaHeart /></span>
      </button>

    </>
  )
}

export default Button
