import '@/styles/globals.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  Hydrate
} from '@tanstack/react-query';
import { Provider } from "react-redux";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import store from '@/store';
import { useDehydratedState } from 'use-dehydrated-state'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from 'next/app';
import { useState } from 'react';
import '../styles/global.scss';

export default function App({ Component, pageProps, ...rest }: AppProps) {
  const queryClient = new QueryClient({

    defaultOptions: {
      queries: {
        retry: 0,
        suspense: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  });
  return <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RecoilRoot>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={true} />
          <Component {...pageProps} />
        </Hydrate>
      </RecoilRoot>
    </Provider>
  </QueryClientProvider>
}
