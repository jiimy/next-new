import React from 'react'
import Link from 'next/link';

type TodoItemType = {
  data?: any
}

const TodoItem = ({ data }: TodoItemType) => {

  return (
    <li>
      <Link href={`/todo/${data.id}`}>
        <div className="post">
          <h2>
            {data.id}. {data.title}
          </h2>
        </div>
      </Link>
    </li>
  )
}

export default TodoItem