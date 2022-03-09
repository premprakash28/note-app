import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
const InputDescription = (props) => {
  const dispatch = useDispatch();
  const showPostHandler = () => {
    dispatch(uiActions.displayNotes());
    dispatch(uiActions.setNotesId(props.post.id));
  };
  return (
    <div>
      <button onClick={showPostHandler}> {props.post.title}</button>
    </div>
  );
};

export default InputDescription;
