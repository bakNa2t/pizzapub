import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiFakePizzaMenu";

import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  // console.log(menu);

  return (
    <ul className="divide-y divide-slate-300 px-3">
      {menu.map((pizza) => (
        <MenuItem pizzaObj={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
