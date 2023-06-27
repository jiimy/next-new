import TodoList from '@/components/todolist/TodoLIst';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import TutorialService from '../api';

const Main = () => {

  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: TutorialService.get,
    keepPreviousData: true,
    refetchOnWindowFocus: true,
  });


  return (
    <div>
      메인
      {/* <TodoPost /> */}
      <TodoList data={data} />
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