import { Layout } from '../components/Layout.tsx';
import About from '../components/About.tsx';
import Skills from '../components/Skills.tsx';
import Work from '../components/Work.tsx';
import Contact from '../components/Contact.tsx';

function App() {
  return (
    <Layout>
      <About />
      <Skills />
      <Work />
      <Contact />
    </Layout>
  );
}

export default App;
