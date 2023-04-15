import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NextNProgress />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
