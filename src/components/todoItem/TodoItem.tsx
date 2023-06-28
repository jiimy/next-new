import React, { useState } from 'react'
import Link from 'next/link';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import s from './todoitem.module.scss';
import TutorialService from '@/pages/api';

type TodoItemType = {
  data?: any
}

const TodoItem = ({ data }: TodoItemType) => {
  const [deleteId, setDeleteId] = useState(data.id);
  const queryClient = useQueryClient();

  const { isLoading: isDeletingTutorial, mutate: deleteTutorial } = useMutation<any, Error>(
    async () => {
      return await TutorialService.deleteById(deleteId);
    },
    {
      onSuccess: (res) => {
        // setDeleteResult(fortmatResponse(res));
        queryClient.invalidateQueries(['todos']);
        console.log('res', res);
      },
      onError: (err: any) => {
        // setDeleteResult(fortmatResponse(err.response?.data || err));
      },
    }
  );

  function deleteDataById() {
    console.log('cc', deleteId)
    if (deleteId) {
      try {
        deleteTutorial();
      } catch (err) {
        // setDeleteResult(fortmatResponse(err));
      }
    }
  }


  return (
    <li className={s.item}>
      <Link href={`/todo/${data.id}`}>
        <div className="post">
          <h2>
            {data.id}. {data.title}
          </h2>
        </div>
      </Link>
      <button onClick={deleteDataById}>삭제</button>
    </li>
  )
}

export default TodoItem