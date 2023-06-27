import React from 'react'
import { useState } from 'react';
import { QueryClient, dehydrate, useQuery, useMutation } from '@tanstack/react-query';
import TutorialService from '@/pages/api';

const TodoPost = () => {
  const [text, setText] = useState('');

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
        console.log('res', res);
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
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={text} onChange={onchange} />
        <button>post</button>
      </form>
    </div>
  )
}

export default TodoPost