import GetData from "./GetData";
import PostData from "./PostData";
import classes from "./Profile.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { useSelector } from "react-redux";
import NotesData from "./NotesData";
import CategoryList from "./CategoryList";
import CatItem from "./CatItem";
import InputDescription from "./InputDescription";

const Profile = () => {
  const dispatch = useDispatch();
  const postUi = useSelector((state) => state.ui.formIsVisible);
  const notesUi = useSelector((state) => state.ui.notesIsVisible);
  const catUi = useSelector((state) => state.ui.catVis);
  let catDisplay = useSelector((state) => state.ui.catDisplay);
  let isLoaded = useSelector((state) => state.ui.isLoaded);
  const justPosted = useSelector((state) => state.ui.justPosted);

  const post = useSelector((state) => state.post.notes);

  // const notes = useSelector((state) => state.post.notes);
  // console.log(notes);

  // const isLoggedIn = !!token;
  console.log("-----------");
  console.log(catUi);

  const showCategoriesHandler = () => {
    dispatch(uiActions.setCategoriesIsVisible());
  };
  return (
    <div className={classes.grid3}>
      <div className={classes.sidebar}>
        <button
          onClick={() => {
            dispatch(uiActions.setIsLoaded(true));
            dispatch(uiActions.setCatDisplay(false));
          }}
        >
          Notes
        </button>
        <br />
        <button
          onClick={() => {
            dispatch(uiActions.toggleForm());
          }}
        >
          New Notes
        </button>
        <br />
        <button onClick={showCategoriesHandler}>Categories</button>
        {catUi && <CategoryList />}
      </div>
      <div className={classes.notes}>
        <p>
          <strong>Notes display</strong>
        </p>
        {/* {justPosted && <GetData />} */}
        {!catDisplay && !isLoaded && <GetData />}
        {!catDisplay &&
          isLoaded &&
          post.map((postEntry) => (
            <InputDescription key={postEntry.id} post={postEntry} />
          ))}
        {catDisplay && <CatItem />}
      </div>

      <div>
        {postUi && <PostData />}
        {notesUi && <NotesData />}
      </div>
    </div>
  );
};
export default Profile;
