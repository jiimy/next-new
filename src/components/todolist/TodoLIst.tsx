import Link from 'next/link';
import TodoItem from '../todoItem/TodoItem';
import { useQuery } from '@tanstack/react-query';
import TutorialService from '@/pages/api';

type TodosType = {
  data?: any
}

// const TodoList = ({ data }: TodosType) => {
const TodoList = () => {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: TutorialService.get,
    keepPreviousData: true,
    // enabled: true,
    refetchOnWindowFocus: true,
  });
  // dd

  console.log('data', data);
  return (
    <ul className="posts">
      {
        data && data.map((item: any, i: number) => (
          <TodoItem data={data[i]} key={i} />
        ))
      }
    </ul>
  );
}

export default TodoList;
