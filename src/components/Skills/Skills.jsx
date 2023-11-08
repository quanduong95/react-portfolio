import { Button } from '../Button/Button';

export const Skills = () => {
  const skills = [
    [
      {
        name: 'HTML',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
      {
        name: 'SCSS',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      },
      {
        name: 'JavaScript',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'TypeScript',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        name: 'Java',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
      {
        name: 'Python',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
    ],

    [
      {
        name: 'React',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'Redux',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      },
      {
        name: 'Next.js',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      },
      {
        name: 'Tailwind',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      },

      {
        name: 'NodeJS',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Express',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
      },
      {
        name: 'NestJS',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
      },
    ],

    [
      {
        name: 'Git',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'Github',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        name: 'AWS',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/1024px-AWS_Simple_Icons_AWS_Cloud.svg.png',
      },
      {
        name: 'Vercel',
        url: 'https://cdn.worldvectorlogo.com/logos/vercel.svg',
      },
      {
        name: 'Firebase',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      },
    ],
  ];
  return (
    <main className='max-w-[var(--max-width)] mx-auto min-h-[50vh] '>
      <section className='w-[80%] mx-auto '>
        <h1 className='text-6xl font-bold my-8'>Skills</h1>
        <div>
          <h2 className='text-2xl my-4 '>Programming Languages</h2>
          <ul className='my-4 flex flex-col sm:grid sm:grid-cols-3 lg:grid-cols-7'>
            {skills[0].map((item, index) => (
              <li
                className='my-4 flex flex-col items-center'
                key={index}
              >
                <img
                  className='w-[80px] sm:w-[50px] my-4'
                  src={item.url}
                />
                <Button text={item.name} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='text-2xl my-4 '>Frameworks and Libraries</h2>
          <ul className='my-4 flex flex-col sm:grid sm:grid-cols-3 lg:grid-cols-7'>
            {skills[1].map((item, index) => (
              <li
                className='my-4 flex flex-col items-center'
                key={index}
              >
                <img
                  className='w-[80px] sm:w-[50px] my-4'
                  src={item.url}
                />
                <Button text={item.name} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='text-2xl my-4 '>Tools and Platforms</h2>
          <ul className='my-4 flex flex-col sm:grid sm:grid-cols-3 lg:grid-cols-7'>
            {skills[2].map((item, index) => (
              <li
                className='my-4 flex flex-col items-center'
                key={index}
              >
                {item.name === 'AWS' ? (
                  <img
                    className='w-[80px] sm:w-[80px] my-4'
                    src={item.url}
                  />
                ) : (
                  <img
                    className='w-[80px] sm:w-[50px] my-4'
                    src={item.url}
                  />
                )}

                <Button text={item.name} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};
