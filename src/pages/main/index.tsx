import TodoList from '@/components/todolist/TodoLIst';
import { QueryClient, dehydrate, useQuery, useMutation } from '@tanstack/react-query';
import TutorialService from '../api';
import { useState } from 'react';

const Main = () => {
  const [text, setText] = useState('');

  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: TutorialService.get,
    keepPreviousData: true
  });

  const onchange = (e: any) => {
    setText(e.target.value);
  }

  const { isLoading: isPostingTutorial, mutate: postTutorial } = useMutation<any, Error>(
    async () => {
      return await TutorialService.create(
        {
          title: text,
        });
    },
    {
      onSuccess: (res) => {
        // setPostResult(fortmatResponse(res));
      },
      onError: (err: any) => {
        // setPostResult(fortmatResponse(err.response?.data || err));
      },
    }
  );


  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('11');
    try {
      postTutorial();
    } catch (err) {
      // setPostResult(fortmatResponse(err));
    }
  }

  return (
    <div>
      메인
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={text} onChange={onchange} />
        <button>post</button>
      </form>
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
    revalidate: 30,
  };
}

export default Main