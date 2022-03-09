import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { postActions } from "../store/post-slice";
import { uiActions } from "../store/ui-slice";

import classes from "./MainHeader.module.css";

// inport;

const MainHeader = () => {
  const token = useSelector((state) => state.auth.token);
  const email = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();

  const isLoggedIn = !!token;

  const logOutHandler = () => {
    dispatch(postActions.setPost(null));
    dispatch(authActions.logout());
    dispatch(uiActions.setNotesId(null));
    dispatch(uiActions.setCategoriesIsVisible(false));
    dispatch(postActions.setCategories(null));
    dispatch(uiActions.setCategoryId(null));
    dispatch(uiActions.setCatDisplay(false));
    dispatch(uiActions.setIsLoaded(false));
  };

  return (
    <div
      className={`container  bg-blue-400 p-4 flex  gap-16 justify-between items-center ${classes.mainHeader}`}
    >
      <div>
        <Link to="/welcome">Social Site</Link>
      </div>
      <ul className="container w-96 p-4 flex items-center justify-between">
        {!isLoggedIn && (
          <div>
            <Link to="/login-signup/login" className="border-2 p-4 rounded">
              Login
            </Link>
            <Link to="login-signup/signup" className="border-2 p-4 rounded">
              Sign Up
            </Link>
          </div>
        )}
        {isLoggedIn && <h2>{email}</h2>}
        {isLoggedIn && (
          <li>
            <button onClick={logOutHandler} className="border-2 p-4 rounded">
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MainHeader;
