import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMenu } from "../../services/apiFakePizzaMenu";

import MenuItem from "./MenuItem";
import ButtonToTop from "../../ui-blocks/ButtonToTop";

function Menu() {
  const menu = useLoaderData();

  const [isShowToTopBtn, setIsShowToTopBtn] = useState(false);
  const elem = document.querySelector("main");

  useEffect(
    function () {
      elem.addEventListener("scroll", function () {
        if (elem.scrollTop > 300) {
          setIsShowToTopBtn(true);
        } else {
          setIsShowToTopBtn(false);
        }
      });
      return elem.removeEventListener("scroll", function () {
        if (elem.scrollTop > 300) {
          setIsShowToTopBtn(true);
        } else {
          setIsShowToTopBtn(false);
        }
      });
    },
    [setIsShowToTopBtn, elem],
  );

  function returnToTop() {
    elem.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <ul className="divide-y divide-slate-300 px-5 sm:px-3">
        {menu.map((pizza) => (
          <MenuItem pizzaObj={pizza} key={pizza.id} />
        ))}
      </ul>
      {isShowToTopBtn && <ButtonToTop onClick={returnToTop} />}
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
