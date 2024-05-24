import { useSelector } from "react-redux";
import UserCreating from "../base-blocks/user/UserCreating";
import Button from "./Button";

function MainPage() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="xl:my-66 my-20 px-5 text-center sm:my-40 lg:my-56 2xl:my-[28rem]">
      <h1 className=" text-center text-2xl font-semibold text-slate-700 md:text-4xl">
        Welcome to PizzaPub
      </h1>
      <p className="mb-4 text-center text-xl font-semibold text-purple-500 md:text-2xl">
        Start your order the best pizza here
      </p>
      {username === "" ? (
        <UserCreating />
      ) : (
        <Button to="/menu" type="primary">
          Back to menu, {username}
        </Button>
      )}
    </div>
  );
}

export default MainPage;
