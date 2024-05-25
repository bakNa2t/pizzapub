import { useRouteError } from "react-router-dom";
import ButtonLink from "./ButtonLink";

function Error() {
  const error = useRouteError();

  return (
    <div className="mt-8 px-6">
      <h1 className="mb-2 text-lg font-semibold">Something went wrong!</h1>
      <p className="mb-4 rounded-full bg-red-200 px-4 py-2 text-red-900">
        {error.data || error.message}
      </p>

      <ButtonLink to="-1" className="text-indigo-400">
        Go back
      </ButtonLink>
    </div>
  );
}

export default Error;
