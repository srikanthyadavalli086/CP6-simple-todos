import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="li-container">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        DELETE
      </button>
    </li>
  )
}

export default TodoItem
