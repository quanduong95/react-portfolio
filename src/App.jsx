import { TopNav } from './components/TopNav/TopNav';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <main className='bg-[var(--bg-primary)] min-h-screen'>
      <div
        className='min-h-screen'
        style={{
          backgroundImage: `url('https://user-images.githubusercontent.com/95478989/198955082-6e78ebb5-e1e4-49f9-8d32-6e5af3984dcd.gif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <TopNav />
        <Hero />
      </div>
      <About />
      <Skills />
    </main>
  );
}

export default App;
