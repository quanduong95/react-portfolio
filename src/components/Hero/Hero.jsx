import { TfiLinkedin, TfiFacebook } from 'react-icons/tfi';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { AiOutlineArrowDown } from 'react-icons/ai';
export const Hero = () => {
  return (
    <main className='max-w-[var(--max-width)] mx-auto my-8  md:h-[80vh] '>
      <section className='w-[80%] m-auto '>
        <h1 className='text-8xl font-bold my-4 md:my-8'>Peter Duong</h1>
        <h2 className='text-xl text-[var(--text-bold)] font-bold my-4 md:my-8'>
          Full Stack Web Developer
        </h2>
        <p className='my-4 md:my-8 text-[var(--text-secondary)]'>
          As a Full Stack Developer, I specialize in creating seamless and
          robust web applications by integrating both frontend and backend
          technologies.
        </p>
        <ul className='flex my-6 gap-6  '>
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
        <div className='w-full grid place-items-center my-16'>
          <AiOutlineArrowDown
            className='my-20 bounce'
            size={100}
          />
        </div>
      </section>
    </main>
  );
};
