import { useDispatch, useSelector } from "react-redux";

function App() {

  const todos = useSelector(state => state)

  const dispatch = useDispatch()

  function deleteTodo(id){
    dispatch({
      type:'DELETE',
      payload: id
    })
  }

  return (
    <div className="container">
      {
        todos.map((item,index) => {
          return (
            <div key={index} className="todos">
              <div>
                <input type="checkbox" checked={item.done} />
              </div>
              <div>
              {item.text}
              </div>
              <div>
              <button onClick={() => deleteTodo(index)} className="delete-btn">
                x
              </button>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
