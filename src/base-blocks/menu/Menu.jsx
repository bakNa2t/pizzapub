import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiFakePizzaMenu";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <div>
      <h1>PizzaHub Menu</h1>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
