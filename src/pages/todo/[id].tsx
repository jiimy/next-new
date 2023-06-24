import { ROOT_API } from '@/constants/api';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import { useQuery, QueryClient, dehydrate } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { getTodoItem, getTodoList } from '../api';

interface PostProps {
  title: string;
  content: string;
}



export async function getStaticPaths() {
  const { data: posts } = await axios.get('/api/posts');

  // 모든 글의 ID로 경로를 생성합니다.
  const paths = posts.map((post: any) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: true, // fallback을 true로 설정하여 없는 경로로의 접근 시 404 페이지를 자동으로 생성하도록 합니다.
  };
}


export async function getStaticProps({ params }: any) {
  const { data: post } = await axios.get(`/api/posts/${params.id}`);
  return {
    props: {
      post
    },
    revalidate: 30,
  };
}


const Index = () => {
  const router = useRouter();
  const { query } = router
  const todoId = router.query.id as string;
  console.log('dd111: ', todoId);

  const { data } = useQuery(['todo-item', todoId], () => getTodoItem(todoId));
  console.log('id', data);

  return (
    <div>
      <p></p>
    </div>
  )
}

export default Index

// export async function getStaticProps({ query:any }) {
//   const postId = query.postId as string;
//   const post = await getTodoItem(postId);

//   return {
//     props: {
//       post,
//     },
//   };
// }


// export async function getStaticPaths() {
//   const postIds = await getTodoList();

//   const paths = postIds.map((postId: any) => ({
//     params: { postId: postId.toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }
