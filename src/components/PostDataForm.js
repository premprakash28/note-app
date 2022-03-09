import { useRef } from "react";
import classes from "./PostDataForm.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

const PostDataForm = (props) => {
  const dispatch = useDispatch();
  const postRef = useRef();
  const titleRef = useRef();
  const categoryRef = useRef();

  const changeStateHandler = () => {
    dispatch(uiActions.setIsLoaded(true));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const categoryInput = categoryRef.current.value;
    let titleInput = titleRef.current.value;
    let postInput = postRef.current.value;
    props.onFill({
      category: categoryInput,
      title: titleInput,
      post: postInput,
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler} id="postForm" className={classes.post}>
        <label htmlFor="category"> Choose a category:</label>
        <select id="category" form="postForm" ref={categoryRef}>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" ref={titleRef} />
        <br />
        <label htmlFor="mainPost">Write Here!</label>
        <div className="mainPost">
          <textarea ref={postRef} />
        </div>

        <button onClick={changeStateHandler}>POST</button>
      </form>
    </div>
  );
};
export default PostDataForm;
