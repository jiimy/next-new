import React from 'react'
import { useState } from 'react';
import { QueryClient, dehydrate, useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import TutorialService from '@/pages/api';

const TodoPost = () => {
  const [text, setText] = useState('');
  const queryClient = useQueryClient();

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
        queryClient.invalidateQueries(['todos']);
        console.log('res', res);
        setText('');
      },
      onError: (err: any) => {
        // setPostResult(fortmatResponse(err.response?.data || err));
      },
    }
  );


  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      postTutorial();
    } catch (err) {
      // setPostResult(fortmatResponse(err));
      console.log('err', err);
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={text} onChange={onchange} />
        <button>post</button>
      </form>
    </div>
  )
}

export default TodoPost