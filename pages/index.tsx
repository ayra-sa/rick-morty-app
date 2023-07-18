import { HeadContext } from "@/interfaces/head-interface";
import PageLayout from "@/components/layouts/page-layout";
import HomeContent from "@/components/home-content";

const headContext: HeadContext = {
  title: 'Rick and Morty App',
  meta: [
    {
      name: 'description',
      content: 'Rick and Morty app created with Next js'
    }
  ]
}

export default function Home() {

  return (
    <PageLayout headContext={headContext}>
      <HomeContent />      
    </PageLayout>
  );
}
