import { TiArrowBackOutline } from "react-icons/ti";
import ButtonLink from "../../ui-blocks/ButtonLink";

function EmptyCart() {
  return (
    <div className="px-6 py-4">
      <ButtonLink to="/menu">
        <TiArrowBackOutline className="h-5 w-5" /> Back to menu
      </ButtonLink>

      <p className="mt-8 font-semibold ">
        Your cart is still empty. Start adding some pizzas 😥
      </p>
    </div>
  );
}

export default EmptyCart;
