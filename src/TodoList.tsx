import React, {useState} from "react";

interface item {
    id:number;
    text:string;
    completed:boolean;
}

export const TodoList:React.FC = () => {
    const [todos, setTodos] = useState<item[]> ([
        {
            id:1,
            text:"Learn Typescript",
            completed:false
        },
        {
            id:2,
            text:"Do yoga",
            completed:false
        }
    ]

    );

    const [input,setInput] = useState<string>("");

    const handleToggle = (id:number) => {
        setTodos(
            todos.map((todo) => {
                if(todo.id === id){
                    return{...todo, completed: !todo.completed};
                }
                return todo;
            })
        )
    };

const handleClick = ()=>{
    const newTodo: item = {id: Date.now(), text: input, completed: false};
    setTodos([...todos, newTodo]);
}

  return (
    <div className="main-container">
  <p>TodoList</p>
      <ul>
      {todos.map((todo)=>(
        <>
 
        <li key={todo.id} onClick={()=>handleToggle(todo.id)}  style={{textDecoration: todo.completed ? "line-through" : "none"}} >{todo.text}</li>
    
        </>
         ))}
      </ul>
      <input type="text" placeholder="Enter task" onChange={(e)=> setInput(e.currentTarget.value)} />
      <button onClick={handleClick} >Add Task</button>
    </div>
  );
};

export default TodoList;
