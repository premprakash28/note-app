import { Link, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import { Navigate } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import SendRequest from "./components/SendRequest";
import GetData from "./components/GetData";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui-slice";
import PostData from "./components/PostData";

import Welcome from "./components/Welcome";
import classes from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.ui.formIsVisible);
  const token = useSelector((state) => state.auth.token);
  console.log(useSelector((state) => state.auth));
  const isLoggedIn = !!token;
  const showForm = () => {
    dispatch(uiActions.toggleForm());
  };
  return (
    <div className={classes.container}>
      <MainHeader />
      {/* <GetData /> */}
      {/* {formState && <SendRequest />} */}
      <Routes>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/login-signup/:login" element={<SendRequest />} />
        {isLoggedIn && <Route path="/profile" element={<Profile />} />}
        {!isLoggedIn && (
          <Route path="/profile" element={<Navigate to="/welcome" />} />
        )}
      </Routes>

      {/* <button onClick={showForm}>{formState ? "Hide" : "Show"} </button> */}
      {/* {isLoggedIn && <PostData />} */}
    </div>
  );
}

export default App;
