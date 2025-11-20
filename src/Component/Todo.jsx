import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./Editform";

function Todo({ propsTodo, deleteTodo, toggleCompleted, toggleIsEditing, editTodo }) {
  return (propsTodo.isEditing ? 
    <EditForm propsTodo = {propsTodo} editTodo={editTodo}/>
   : 
    <div className={`todo ${propsTodo.isCompleted ? "completed" : ""}`}>
      <p
        onClick={() => {
          toggleCompleted(propsTodo.id);
        }}
      >
        {propsTodo.content}
      </p>
      <div>
        <MdEdit onClick={() => {toggleIsEditing(propsTodo.id)}} style={{ cursor: "pointer" }} />
        <MdDelete
          onClick={() => {
            deleteTodo(propsTodo.id);
          }}
          style={{ cursor: "pointer", marginLeft: "5px" }}
        />
      </div>
    </div>
  );
}

export default Todo;
