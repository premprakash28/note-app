import { useSelector } from "react-redux";
const NotesData = () => {
  const notes = useSelector((state) => state.post.notes);
  const id = useSelector((state) => state.ui.notesId);
  if (id === null) {
    return <div>No Notes Found!</div>;
  }
  const note = notes.find((item) => {
    return item.id === id;
  });
  return (
    <div>
      <div>{note.category}</div>
      <div>{note.title}</div>
      <div>{note.post}</div>
    </div>
  );
};

export default NotesData;
