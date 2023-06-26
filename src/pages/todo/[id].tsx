import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getTodoItem } from '../api';
import axios from 'axios';
import { ROOT_API } from '@/constants/api';

interface TodoItemProps {
  todoItem: any;
  paths: any;
}



export async function getStaticPaths() {
  const { data: posts } = await axios.get(`${ROOT_API}/todos`);

  // 모든 글의 ID로 경로를 생성합니다.
  const paths = posts.map((post: any) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: true, // fallback을 true로 설정하여 없는 경로로의 접근 시 404 페이지를 자동으로 생성하도록 합니다.
  };
}


export async function getStaticProps({ params, paths }: any) {
  console.log('getStaticProps', paths);
  const { data: todoItem } = await axios.get(`${ROOT_API}/todos/${params.id}`);
  return {
    props: {
      todoItem
    },
    revalidate: 30,
  };
}


const Index = ({ todoItem, paths }: TodoItemProps) => {
  // const router = useRouter();
  // const { query } = router
  // const todoId = router.query.id as string;

  // console.log('query', query);

  // const { data } = useQuery(['todo-item', todoId], () => getTodoItem(todoId));
  // console.log('data', data);
  console.log('todoItem', todoItem)
  console.log('paths', paths)

  return (
    <div>
      테스트
      {/* {todoItem &&
      } */}
      <div>
        <div>id: {todoItem.id}</div>
        <div>title: {todoItem.ititle}</div>
        <div>completed: {todoItem.completed}</div>
      </div>
    </div >
  )
}

export default Index