import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, uniqueKey} = props
  const {title} = todoDetails

  const onDelete = () => {
    deleteTodo(uniqueKey)
  }

  return (
    <li className="li-container">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
