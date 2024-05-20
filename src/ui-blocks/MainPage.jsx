import UserCreating from "../base-blocks/user/UserCreating";

function MainPage() {
  return (
    <div className="my-8 text-center">
      <h1 className=" text-center text-2xl font-semibold text-slate-700">
        Welcome to PizzaPub
      </h1>
      <p className="mb-4 text-center text-xl font-semibold text-purple-500">
        Start your order the best pizza here
      </p>
      <UserCreating />
    </div>
  );
}

export default MainPage;
