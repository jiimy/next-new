import Link from 'next/link';
import TodoItem from '../todoItem/TodoItem';
import { useQuery } from '@tanstack/react-query';
import TutorialService from '@/pages/api';
import s from './todolist.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ROOT_API } from '@/constants/api';

type TodosType = {
  data?: any
}
type TodoState = {}

// const TodoList = ({ data }: TodosType) => {
const TodoList = () => {
  const [tab, setTab] = useState(0);
  // const [filteredData, setFilteredData] = useState([]);
  const [filteredData, setFilteredData] = useState<TodoState[] | undefined>([]);
  // const [todos, setTodos] = useState<TodoState[] | undefined>([]);

  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: TutorialService.get,
    keepPreviousData: true,
    // enabled: true,
    refetchOnWindowFocus: true,
  });




  // const url = new URL('https://64927c19428c3d2035d02a9d.mockapi.io/api/todos');
  // url.searchParams.append('completed', 'true');

  // fetch(url, {
  //   method: 'GET',
  //   headers: { 'content-type': 'application/json' },
  // }).then(res => {
  //   if (res.ok) {
  //     console.log('res', res.json());
  //     return res.json();
  //   }
  //   // handle error
  // }).then(tasks => {

  //   // mockapi returns only tasks that match `hello` string
  // }).catch(error => {
  //   // handle error
  // })

  useEffect(() => {
    switch (tab) {
      case 0:
        setFilteredData(data);
        break;
      case 1:
        setFilteredData(data?.filter((item) => item.completed === true));
        break;
      case 2:
        setFilteredData(data?.filter((item) => item.completed === false));
        break;
      default:
        break;
    }
  }, [tab, data])

  return (
    <div>
      <nav>
        <div onClick={() => setTab(0)}>전체</div>
        <div onClick={() => setTab(1)}>완료</div>
        <div onClick={() => setTab(2)}>미완료</div>
      </nav>
      <ul className={s.posts}>
        {
          filteredData && filteredData.map((item: any, i: number) => (
            <TodoItem data={item} key={i} />
          ))
        }
      </ul>
    </div>
  );
}

export default TodoList;

