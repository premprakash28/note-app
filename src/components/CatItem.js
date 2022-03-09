import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

const CatItem = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.ui.categoryId);
  const catListItems = useSelector((state) => state.post.categories[id]);
  return (
    <div>
      {catListItems.map((cat) => (
        <button
          key={cat.id}
          onClick={() => {
            dispatch(uiActions.setNotesId(cat.id));
            dispatch(uiActions.displayNotes());
          }}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );
};

export default CatItem;
