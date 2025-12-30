import Hero from '@/components/hero' ;
import Services from '@/components/services';
import About from '@/components/about';
import Portfolio from '@/components/portfolio';
import FAQ from '@/components/faq';
import Contact from '@/components/contact/contact';



export default function Home() {
  return (
    <>
     
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}
