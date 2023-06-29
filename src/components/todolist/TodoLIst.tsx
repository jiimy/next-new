import Link from 'next/link';
import TodoItem from '../todoItem/TodoItem';
import { useQuery } from '@tanstack/react-query';
import TutorialService from '@/pages/api';
import s from './todolist.module.scss';

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
    <ul className={s.posts}>
      {
        data && data.map((item: any, i: number) => (
          <TodoItem data={data[i]} key={i} />
        ))
      }
    </ul>
  );
}

export default TodoList;
