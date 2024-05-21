import { useRouteError } from "react-router-dom";
import ButtonLink from "./ButtonLink";

function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.data || error.message}</p>

      <ButtonLink to="-1">Go back</ButtonLink>
    </div>
  );
}

export default Error;
