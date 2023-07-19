import { ReactNode } from "react";
import Header from "../headers/header";
import Head from "next/head";
import { HeadContext } from "@/interfaces/head-interface";
import Footer from "../footer";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  headContext: HeadContext;
};

const PageLayout = ({ children, headContext }: Props) => {
  const { title, meta } = headContext;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>{title}</title>
        {meta.map(({ property, content, key, name }) => (
          <meta
            name={name || ""}
            content={content || ""}
            property={property || ""}
            key={key || ""}
          />
        ))}
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </motion.div>
  );
};

export default PageLayout;
