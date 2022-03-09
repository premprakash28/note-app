import { useSelector } from "react-redux";
import PostDataForm from "./PostDataForm";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

const PostData = () => {
  const id = useSelector((state) => state.auth.uId);
  const dispatch = useDispatch();
  const url = `https://react-fp-c3d45-default-rtdb.firebaseio.com/users/${id}.json`;

  async function postForm(postInput) {
    // console.log(postInput);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(postInput),
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(uiActions.setIsLoaded(false));
    dispatch(uiActions.setCatDisplay(false));
  }

  return <PostDataForm onFill={postForm} />;
};
export default PostData;
