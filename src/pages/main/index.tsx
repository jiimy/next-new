import TodoList from '@/components/todolist/TodoLIst';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';

const Main = () => {
  // const { data } = useQuery(['todos'], getTodoList)

  return (
    <div>
      메인
      <button>post</button>
    </div>
  )
}

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(['todos'], getTodoList);
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//     revalidate: 30,
//   };
// }

export default Main