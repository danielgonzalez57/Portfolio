import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Stack from '@/components/sections/Stack';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

// Separator between sections
function SectionDivider() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="border-t border-border border-dashed" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Stack />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
