import { useRouteError } from "react-router-dom";

import ButtonLink from "./ButtonLink";
import { BiErrorCircle } from "react-icons/bi";
import { TiArrowBackOutline } from "react-icons/ti";

function Error() {
  const error = useRouteError();

  return (
    <div className="mt-8 flex w-full flex-col items-center px-6">
      <h1 className="mb-2 text-lg font-semibold md:mb-6 md:text-2xl">
        Something went wrong!
      </h1>
      <p className="mb-4 w-full gap-1 rounded-lg bg-red-200 px-2 py-2 text-red-900 md:flex md:items-center md:rounded-full md:px-4">
        <BiErrorCircle className="text-[3rem] sm:text-2xl" />{" "}
        {error.data || error.message}
      </p>

      <ButtonLink to="-1" className="text-indigo-400">
        <TiArrowBackOutline className="h-5 w-5" />
        Go back
      </ButtonLink>
    </div>
  );
}

export default Error;
