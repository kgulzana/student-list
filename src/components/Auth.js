import { logoutAction } from "../store/actions/auth";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Auth({ logined }) {
  let dispatch = useDispatch();

  return (
    <div className="auth-section">
      {logined ? (
        <>
          You are logged in!
          <button onClick={() => dispatch(logoutAction())}></button>
        </>
      ) : (
        <>
          You are not logged in! <Link to="/login">Login</Link> or{" "}
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
}
