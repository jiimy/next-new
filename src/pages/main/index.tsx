import dynamic from 'next/dynamic';
import TodoList from '@/components/todolist/TodoLIst';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import TutorialService from '../api';
// import TodoPost from '@/components/todopost/TodoPost';
const TodoPost = dynamic(
  () => import('@/components/todopost/TodoPost')
)
// const DynamicComponent4 = dynamic(() => import('../components/hello4'))

const Main = () => {

  return (
    <div>
      메인
      <TodoPost />
      {/* <TodoList data={data} /> */}
      <TodoList />
    </div>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['todos'], TutorialService.get);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 1,
  };
}

export default Main