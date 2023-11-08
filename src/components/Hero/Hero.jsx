import { TfiLinkedin, TfiFacebook } from 'react-icons/tfi';
import { BsGithub, BsInstagram } from 'react-icons/bs';
export const Hero = () => {
  return (
    <main className='max-w-[var(--max-width)] mx-auto my-8  md:h-[80vh] '>
      <section className=' w-[90%] sm:w-[50%]  m-auto lg:m-0  h-auto p-2 '>
        <h1 className='text-6xl sm:text-7xl text-white font-bold my-4 md:my-8 '>
          Peter Duong
        </h1>
        <h2 className='text-xl text-white font-bold my-4 md:my-8'>
          Full Stack Web Developer
        </h2>
        <p className='my-4 md:my-8 text-[var(--text-banner)] '>
          As a Full Stack Developer, I specialize in creating seamless and
          robust web applications by integrating both frontend and backend
          technologies.
        </p>
        <ul className='flex my-12 gap-6 text-white '>
          <li className='cursor-pointer'>
            <a
              href='https://www.linkedin.com/in/quan-duong-ca/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <TfiLinkedin size={24} />
            </a>
          </li>
          <li className='cursor-pointer'>
            <a
              href='https://www.facebook.com/nhatquanx95/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <TfiFacebook size={24} />
            </a>
          </li>
          <li className='cursor-pointer'>
            <a
              href='https://github.com/quanduong95'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsGithub size={24} />
            </a>
          </li>
          <li className='cursor-pointer'>
            <a
              href='https://www.instagram.com/novemberman95/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsInstagram size={24} />
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};
