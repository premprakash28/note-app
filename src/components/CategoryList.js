import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

const CategoryList = () => {
  const categories = useSelector((state) => state.post.categories);
  const dispatch = useDispatch();

  const categList = [];
  for (const key in categories) {
    categList.push(key);
  }

  // const catDispalyHandler = () => {
  //   dispatch(uiActions.setCatDisplay(true));
  //   dispatch(uiActions.setCategoryId(cat));
  // };

  return (
    <div>
      {categList.map((cat) => (
        <div key={cat}>
          <button
            onClick={() => {
              dispatch(uiActions.setCatDisplay(true));
              dispatch(uiActions.setCategoryId(cat));
            }}
          >
            {cat}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
