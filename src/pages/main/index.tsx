import React from 'react'
import axios from 'axios';
import { useQuery, QueryClient, dehydrate } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import TodoList from '@/components/todolist/TodoLIst';
import { ROOT_API } from '@/constants/api';
import { getTodoList } from '../api';

const Main = () => {
  const { data } = useQuery(['todos'], getTodoList)
  console.log('dd', data);

  return (
    <div>
      메인
      <button>post</button>
      <TodoList data={data} />
    </div>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['todos'], getTodoList);
  console.log('cc', queryClient);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 30,
  };
}

export default Main