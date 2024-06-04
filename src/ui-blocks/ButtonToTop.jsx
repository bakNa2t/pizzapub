import { IoIosArrowUp } from "react-icons/io";

function ButtonToTop() {
  return (
    <div className="fixed bottom-20 right-10 h-10 w-10 cursor-pointer bg-slate-700 p-2 text-slate-200 transition-all duration-300 hover:bg-slate-400 hover:text-slate-700">
      <IoIosArrowUp className="text-sm font-bold sm:text-2xl" />
    </div>
  );
}

export default ButtonToTop;
