import TutorialService from '@/pages/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';
import s from './todoitem.module.scss';

type TodoItemType = {
  data?: any
}

const TodoItem = ({ data }: TodoItemType) => {
  console.log('itemdata', data.id, data.completed);
  const queryClient = useQueryClient();
  const [dataId, setDataId] = useState(data.id);
  const [putTitle, setPutTitle] = useState(data.title);
  const [chk, setChk] = useState(data.completed);
  const [toggle, setToggle] = useState(false);
  const [editText, setEditText] = useState('');

  const { isLoading: isDeletingTutorial, mutate: deleteTutorial } = useMutation<any, Error>(
    async () => {
      return await TutorialService.deleteById(dataId);
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

  const { isLoading: isUpdatingTutorial, mutate: updateTutorial } = useMutation<any, Error>(
    async () => {
      return await TutorialService.update(
        data.id,
        {
          title: editText,
          completed: chk
        });
    },
    {
      onSuccess: (res) => {
        // setPutResult(fortmatResponse(res));
        console.log('res', res);
        queryClient.invalidateQueries(['todos']);
      },
      onError: (err: any) => {
        // setPutResult(fortmatResponse(err.response?.data || err));
      },
    }
  );

  function deleteDataById() {
    console.log('cc', dataId)
    if (dataId) {
      try {
        deleteTutorial();
      } catch (err) {
        // setDeleteResult(fortmatResponse(err));
      }
    }
  }

  const changeTodo = (e: any, getCheck?: any) => {
    setEditText(e.target.value);
    setChk(!getCheck);
    if (dataId) {
      try {
        updateTutorial();
      } catch (err) {
        // setPutResult(fortmatResponse(err));
      }
    }
  };

  return (
    <li className={s.item}>
      {data.id}.
      <div className={s.input_wrap}>
        <input type="text" defaultValue={putTitle} className={`${s.input} ${s.is_edit}`}
          onChange={(e) => changeTodo(e)}
          onBlur={() => setToggle(false)}
          onFocus={() => setToggle(true)}
        />
        <input type="checkbox" name="" id="" checked={data.completed}
          onChange={(e) => {
            changeTodo(e, data.completed)
          }}
        />
      </div>
      <div className={s.btn_wrap}>
        <Link href={`/todoDetail/${data.id}`}>
          링크 이동
        </Link>
        <button onClick={deleteDataById}>삭제</button>
        {/* <button onClick={() => setToggle(!toggle)} >{toggle ? '확인' : '수정'}</button> */}
      </div>
    </li>
  )
}

export default TodoItem