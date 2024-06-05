import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiFakePizzaMenu";

import MenuItem from "./MenuItem";
import ButtonToTop from "../../ui-blocks/ButtonToTop";

function Menu() {
  const menu = useLoaderData();
  // console.log(menu);

  function returnToTop() {
    const elem = document.querySelector("main");
    elem.scrollTo({ top: 0, behavior: "smooth" });
  }

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
