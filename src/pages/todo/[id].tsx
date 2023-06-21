import { ROOT_API } from '@/constants/api';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import { useQuery, QueryClient, dehydrate } from '@tanstack/react-query';
import { GetStaticProps } from 'next';

export async function getBoardList() {
  const { data } = await axios.get(`${ROOT_API}/todos`);
  return data;
}

// export const getStaticProps = async ({ params: any }) => {
//   try {
//     const { data, error } = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts/${params.id}`
//     );

//     if (error || !data) {
//       console.log(errors);
//       return { notFound: true };
//     }

//     return {
//       props: { post: data },
//       revalidate: 10
//     };
//   } catch (err) {
//     console.log(err);
//     return { notFound: true };
//   }
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery('todos', fetchUserData);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };

type TodoDetailPage = {
  data?: any
}

const Index = ({ data }: TodoDetailPage) => {
  const router = useRouter();
  const { query } = router

  console.log('d', query.id, data);
  return (
    <div>
      <p>post slug : { }</p>
    </div>
  )
}

export default Index





// export const getStaticPaths = async () => {
//   try {
//     const { data } = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts`
//     );
//     // console.log(data.slice(0, 5));
//     const paths = data.map((post:any) => ({
//       params: { id: post.id.toString() }
//     }));

//     if (!data) {
//       // console.log(error);
//       return { notFound: true };
//     }

//     return {
//       paths,
//       fallback: "blocking"
//     };
//   } catch (err) {
//     console.log(err);
//     return { notFound: true };
//   }
// };