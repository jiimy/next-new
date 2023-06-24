import '@/styles/globals.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  Hydrate
} from '@tanstack/react-query';
import { useDehydratedState } from 'use-dehydrated-state'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from 'next/app';
import { useState } from 'react';

export default function App({ Component, pageProps, ...rest }: AppProps) {
  // const dehydratedState = useDehydratedState()
  const [queryClient] = useState(() => new QueryClient({

    defaultOptions: {
      queries: {
        retry: 0,
        suspense: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  }));
  return <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <ReactQueryDevtools initialIsOpen={true} />
      <Component {...pageProps} />
    </Hydrate>
  </QueryClientProvider>
}
