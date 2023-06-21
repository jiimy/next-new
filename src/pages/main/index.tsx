import React from 'react'
import axios from 'axios';
import { useQuery, QueryClient, dehydrate } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import TodoList from '@/components/todolist/TodoLIst';
import { ROOT_API } from '@/constants/api';

export async function getBoardList() {
  const { data } = await axios.get(`${ROOT_API}/todos`);
  return data;
}

// export async function getStaticProps() {
export async function getStaticProps() {
  // const queryClient = new QueryClient()
  // await queryClient.prefetchQuery(['posts'], getBoardList)
  // return {
  //   props: {
  //     dehydratedState: dehydrate(queryClient),
  //   },
  // }
  const posts = await getBoardList()
  return {
    props: { posts },
    revalidate: 1, // In seconds
  }
}

// export async function loader() {
//   const queryClient = new QueryClient()
//   await queryClient.prefetchQuery(['posts'], getBoardList)
//   return json({ dehydratedState: dehydrate(queryClient) })
// }

const Main = () => {
  const { data, isLoading, refetch, error } = useQuery({
    queryKey: ['getTodo'],
    queryFn: getBoardList,
    // initialData: posts,
  });

  console.log('main : ', data);

  return (
    <div>
      메인
      <button>post</button>
      <TodoList data={data} />
    </div>
  )
}

export default Main