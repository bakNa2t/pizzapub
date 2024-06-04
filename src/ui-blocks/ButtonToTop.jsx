import { IoIosArrowUp } from "react-icons/io";

function ButtonToTop() {
  return (
    <div className="fixed bottom-14 right-3 h-6 w-6 cursor-pointer rounded-full bg-slate-700 p-[5px] text-slate-200 opacity-40 transition-all duration-300 hover:text-slate-200 hover:opacity-100 sm:bottom-14 sm:right-10 sm:h-10 sm:w-10 sm:rounded-none sm:p-2 md:bottom-20">
      <IoIosArrowUp className="text-xs font-bold sm:text-2xl" />
    </div>
  );
}

export default ButtonToTop;
