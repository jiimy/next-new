import axios from 'axios';
import { ROOT_API } from '@/constants/api';

interface TodoItemProps {
  todoItem: any;
}

const Index = ({ todoItem }: TodoItemProps) => {
  console.log('todoItem : ', todoItem)

  return (
    <div>
      테스트
      {
        todoItem &&
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


export async function getStaticPaths() {
  const { data: posts } = await axios.get(`${ROOT_API}/todos`);

  const paths = posts.map((post: any) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}


export async function getStaticProps({ params }: any) {

  const { data: todoItem } = await axios.get(`${ROOT_API}/todos/${params.id}`);

  return {
    props: {
      todoItem
    },
    revalidate: 60,
  };
}