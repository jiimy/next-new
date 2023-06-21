import Link from 'next/link';
import TodoItem from '../todoItem/TodoItem';

type TodosType = {
  data?: any
}

const TodoList = ({ data }: TodosType) => {
  return (
    <ul className="posts">
      {
        data && data.map((item: any, i: number) => (
          <TodoItem data={data[i]} key={i}/>
        ))
      }
    </ul>
  );
}

export default TodoList;
