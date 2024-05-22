import UserCreating from "../base-blocks/user/UserCreating";

function MainPage() {
  return (
    <div className="my-20 px-5 text-center sm:my-40">
      <h1 className=" text-center text-2xl font-semibold text-slate-700 md:text-4xl">
        Welcome to PizzaPub
      </h1>
      <p className="mb-4 text-center text-xl font-semibold text-purple-500 md:text-2xl">
        Start your order the best pizza here
      </p>
      <UserCreating />
    </div>
  );
}

export default MainPage;
