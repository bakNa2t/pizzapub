import { TiArrowBackOutline } from "react-icons/ti";
import ButtonLink from "../../ui-blocks/ButtonLink";

function EmptyCart() {
  return (
    <div className="px-6 py-4">
      <ButtonLink to="/menu">
        <TiArrowBackOutline className="h-5 w-5" /> Back to menu
      </ButtonLink>

      <p className="mt-8 bg-slate-300 px-3 py-1 font-semibold md:px-6 md:py-4">
        Your cart is still empty 😕. Back to menu to start adding some pizzas 🤗
      </p>
    </div>
  );
}

export default EmptyCart;
