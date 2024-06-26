import { IoIosArrowUp } from "react-icons/io";

import PropTypes from "prop-types";

function ButtonToTop({ onClick }) {
  ButtonToTop.propTypes = {
    onClick: PropTypes.func,
  };

  return (
    <button
      onClick={onClick}
      className="fixed bottom-14 right-3 h-6 w-6 rounded-full bg-slate-700 p-[5px] text-slate-200 opacity-20 transition-all duration-300 hover:text-slate-200 hover:opacity-100 sm:bottom-14 sm:right-6 sm:h-10 sm:w-10 sm:rounded-lg sm:p-2 md:bottom-20 md:hover:shadow-md md:hover:shadow-slate-600/80"
    >
      <IoIosArrowUp className="text-xs font-bold sm:text-2xl" />
    </button>
  );
}

export default ButtonToTop;
