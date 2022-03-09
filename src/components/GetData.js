import { useState } from "react";
import { useEffect } from "react";
import InputDescription from "./InputDescription";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postActions } from "../store/post-slice";
import { useCallback } from "react";
import { uiActions } from "../store/ui-slice";

const GetData = () => {
  const [postState, setPost] = useState(null);
  const [categoryState, setCategory] = useState(null);
  const id = useSelector((state) => state.auth.uId);
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    const response = await fetch(
      `https://react-fp-c3d45-default-rtdb.firebaseio.com/users/${id}.json`
    );
    const data = await response.json();

    const categories = {};
    const postList = [];
    const catSet = new Set();
    for (const key in data) {
      postList.push({
        title: data[key].title,
        category: data[key].category,
        post: data[key].post,
        id: key,
      });
      catSet.add(data[key].category);
    }
    // const categoryList = [];
    // for (const key2 in data) {
    //   categoryList.push({});
    // }

    for (const key2 of catSet) {
      categories[key2] = [];
    }

    for (const x of postList) {
      categories[x.category].push({ id: x.id, title: x.title });
    }
    // console.log("-------");
    // console.log(categories);
    setPost(postList);
    setCategory(categories);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    dispatch(postActions.setPost(postState));
    dispatch(postActions.setCategories(categoryState));
  });

  // dispatch(uiActions.setJustPosted(false));

  return (
    <div>
      {/* <button onClick={fetchData}>GetData</button> */}
      {postState &&
        postState.map((post) => <InputDescription key={post.id} post={post} />)}
    </div>
  );
};

export default GetData;
