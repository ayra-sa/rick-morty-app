import { ReactNode } from "react";
import Header from "../headers/header";
import Head from "next/head";
import { HeadContext } from "@/interfaces/head-interface";
import Footer from "../footer";

type Props = {
  children: ReactNode;
  headContext: HeadContext
};

const PageLayout = ({ children, headContext }: Props) => {
  const {title, meta} = headContext
  return (
    <>
      <Head>
        <title>{title}</title>
        {meta.map(({property, content, key, name}) => (
          <meta name={name || ''} content={content || ''} property={property || ''}  key={key || ''} />
        ))}
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default PageLayout