import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const SendRequest = () => {
  const navigate = useNavigate();
  const params = useParams();
  // const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  let url;
  console.log(params);
  if (params.login === "login") {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC158LAMHB6JPe58z6lET0YS8gzcxRuVpY";
  } else if (params.login === "signup") {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC158LAMHB6JPe58z6lET0YS8gzcxRuVpY";
  }
  // if (isLogin) {
  //   url =
  //     "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC158LAMHB6JPe58z6lET0YS8gzcxRuVpY";
  // } else {
  //   url =
  //     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC158LAMHB6JPe58z6lET0YS8gzcxRuVpY";
  // }

  async function httpRequest(userData) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: userData.emailInput,
        password: userData.passwordInput,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
    }
    const data = await response.json();
    localStorage.setItem("token", data.idToken);
    dispatch(authActions.setToken(data.idToken));
    dispatch(authActions.setUid(data.localId));
    dispatch(authActions.setEmail(data.email));
    navigate("/profile");
  }
  const toggleSignUp = () => {
    if (params.login === "login") {
      navigate("/login-signup/signup");
    } else {
      navigate("/login-signup/login");
    }
  };
  return (
    <div>
      <Form onFill={httpRequest} />
      <button onClick={toggleSignUp}>
        {params.login === "login" ? "SignUp" : "Login"}
      </button>
    </div>
  );
};

export default SendRequest;
