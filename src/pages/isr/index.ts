// TODO: 훅스 실패
// import { useQuery, QueryClient, dehydrate } from "@tanstack/react-query";

// type types = {
//   queryKey?: [];
//   queryFn?: () => {};
// };

// export async function getStaticProps({ queryKey, queryFn }: types) {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(queryKey, queryFn);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//     revalidate: 30,
//   };
// }
