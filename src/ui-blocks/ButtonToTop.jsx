import { IoIosArrowUp } from "react-icons/io";

import PropTypes from "prop-types";

function ButtonToTop({ onClick }) {
  ButtonToTop.propTypes = {
    onClick: PropTypes.func,
  };

  /*useEffect(function () {
    const onScroll = () => setScrollTop(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);*/

  // useEffect(
  //   function () {
  //     function handleScroll(e) {
  //       setScrollTop(e.currentTarget.scrollY);
  //     }

  //     window.addEventListener("scroll", handleScroll);

  //     console.log(scrollTop);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   },
  //   [scrollTop],
  // );

  return (
    <button
      onClick={onClick}
      className="fixed bottom-14 right-3 h-6 w-6 rounded-full bg-slate-700 p-[5px] text-slate-200 opacity-40 transition-all duration-300 hover:text-slate-200 hover:opacity-100 sm:bottom-14 sm:right-10 sm:h-10 sm:w-10 sm:rounded-none sm:p-2 md:bottom-20"
    >
      <IoIosArrowUp className="text-xs font-bold sm:text-2xl" />
    </button>
  );
}

export default ButtonToTop;
