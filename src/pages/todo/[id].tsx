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
  const postIds = await getTodoList();

  const paths = postIds.map((postId: any) => ({
    params: { postId: postId.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}



export async function getStaticProps({ params }: any) {
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
