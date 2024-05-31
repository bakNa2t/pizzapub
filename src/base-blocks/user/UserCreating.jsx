import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";

import Button from "../../ui-blocks/Button";

function UserCreating() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    if (username.trim() !== "") {
      dispatch(updateName(username));
      navigate("/menu");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-5 text-sm font-semibold text-slate-700 md:text-base">
        Hi there! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Enter your name..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-5 w-64 text-sm placeholder:italic placeholder:text-purple-300 md:placeholder:text-base"
      />

      {username === " " && (
        <p className="text-red-500">
          You can&apos;t use spaces in the beginning of your name
        </p>
      )}

      {username !== "" && username.trim() !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default UserCreating;
