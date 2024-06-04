import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiFakePizzaMenu";
import { useEffect, useState } from "react";

import MenuItem from "./MenuItem";
import ButtonToTop from "../../ui-blocks/ButtonToTop";

function Menu() {
  const menu = useLoaderData();
  // console.log(menu);
  function returnToTop() {
    document.body.top = 0;
    document.documentElement.scrollTop = 0;
    console.log("Resulst:");
  }

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(
    function () {
      function handleScroll() {
        setScrollTop(window.scrollY);
      }

      window.addEventListener("scroll", handleScroll);

      console.log(scrollTop);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [scrollTop],
  );

  return (
    <>
      <ul className="divide-y divide-slate-300 px-5 sm:px-3">
        {menu.map((pizza) => (
          <MenuItem pizzaObj={pizza} key={pizza.id} />
        ))}
      </ul>
      <ButtonToTop onClick={returnToTop} />
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
