import { ROOT_API } from '@/constants/api';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import { useQuery, QueryClient, dehydrate } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { getTodoItem, getTodoList } from '../api';

// interface PostProps {
//   title: string;
//   content: string;
// }



// export async function getStaticPaths() {
//   const { data: posts } = await axios.get(`${ROOT_API}/todos`);

//   // 모든 글의 ID로 경로를 생성합니다.
//   const paths = posts.map((post: any) => ({
//     params: { id: post.id.toString() },
//   }));

//   return {
//     paths,
//     fallback: true, // fallback을 true로 설정하여 없는 경로로의 접근 시 404 페이지를 자동으로 생성하도록 합니다.
//   };
// }


// export async function getStaticProps({ params }: any) {
//   const { data: post } = await axios.get(`${ROOT_API}/todos/${params.id}`);
//   return {
//     props: {
//       post
//     },
//     revalidate: 30,
//   };
// }


const Index = () => {
  const router = useRouter();
  const { query } = router
  // const todoId = router.query.id as string;
  console.log('dd111: ', query);

  const { data } = useQuery(['todo-item', query.id], () => getTodoItem(query.id));
  console.log('id', data);

  return (
    <div>
      <p>{data.id}</p>
    </div>
  )
}

export default Index