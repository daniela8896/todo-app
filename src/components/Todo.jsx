import React from 'react'

const Todo = ({ todo, todoDelete, todoToogleCompleted, setTodoEdit }) => {

    return (
        <div className="card mt-5 pink lighten-4">
            <div className="card-body">
                <h3 className="card-title text-right d-flex justify-content-between ">
                    {todo.title}
                    <button
                        onClick={() => todoToogleCompleted(todo.id)}
                        className={`btn btn-sm ${todo.completed ? 'btn-outline' : 'btn deep-purple lighten-1'} ml-2`}
                    >
                        { todo.completed ? 'Terminado' : 'Terminar'}
                    </button>
                </h3>
                <p className="card-text text-right">
                    {todo.description}
                </p>
                <hr />
                <div className="d-flex justify-content-end gap-3">
                    <button 
                        onClick={() => setTodoEdit(todo)}
                        className="waves-effect purple lighten-3 btn btn-sm"
                    >
                        Editar
                    </button>
                    <button
                        onClick={() => todoDelete(todo.id)}
                        className="waves-effect btn btn-sm blue lighten-3t "
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Todo;