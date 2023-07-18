import client from "@/graphql/client";
import store from "@/store/store";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { Karla } from "next/font/google";
import { Provider } from "react-redux";

const karla = Karla({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <style jsx global>{`
          html {
            font-family: ${karla.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}
