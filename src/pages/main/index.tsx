import TodoList from '@/components/todolist/TodoLIst';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { getTodoList } from '../api';

const Main = () => {
  const { data } = useQuery(['todos'], getTodoList)

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
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 30,
  };
}

export default Main