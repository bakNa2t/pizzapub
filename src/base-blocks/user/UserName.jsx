import { useSelector } from "react-redux";

function UserName() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="text-md hidden font-semibold drop-shadow-sm md:block">
      Welcome,{" "}
      <span className="drop-shadow-xs_slate_700 font-bold uppercase italic">
        {username}
      </span>
    </div>
  );
}

export default UserName;
