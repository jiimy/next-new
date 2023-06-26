import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getTodoItem } from '../api';
import axios from 'axios';
import { ROOT_API } from '@/constants/api';

interface TodoItemProps {
  todoItem: any;
}



export async function getStaticPaths() {
  const { data: posts } = await axios.get(`${ROOT_API}/todos`);

  const paths = posts.map((post: any) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: true, // fallback을 true로 설정하여 없는 경로로의 접근 시 404 페이지를 자동으로 생성하도록 합니다.
  };
}


export async function getStaticProps({ params }: any) {

  const { data: todoItem } = await axios.get(`${ROOT_API}/todos/${params.id}`);

  return {
    props: {
      todoItem
    },
    revalidate: 10,
  };
}


const Index = ({ todoItem }: TodoItemProps) => {
  console.log('todoItem : ', todoItem)

  return (
    <div>
      테스트
      {
        // todoItem &&
        <div>
          <div>id: {todoItem.id}</div>
          <div>title: {todoItem.title}</div>
          <div>completed: {todoItem.completed ? 'true' : 'false'}</div>
        </div>
      }
    </div>
  )
}

export default Index