import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";
import "remixicon/fonts/remixicon.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NextNProgress />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
