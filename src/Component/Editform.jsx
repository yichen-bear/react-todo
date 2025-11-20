import { useState } from "react";


function EditForm({propsTodo, editTodo}) {
    const [content, setContent] = useState(propsTodo.content);
        const handleSubmit = (e) => {
            e.preventDefault()
            editTodo(propsTodo.id, content)
        }
    
        return (
        <form className="create-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="輸入待辦事項"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <button type="submit">完成</button>
        </form>
        );
}

export default EditForm