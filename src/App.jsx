import { TopNav } from './components/TopNav/TopNav';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Button } from './components/Button/Button';

function App() {
  return (
    <main className='bg-[var(--bg-primary)] min-h-screen'>
      <TopNav />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}

export default App;
