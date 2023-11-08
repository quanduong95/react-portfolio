export const About = () => {
  return (
    <main className='max-w-[var(--max-width)] mx-auto min-h-[50vh]  '>
      <section className='w-[80%] mx-auto '>
        <h1 className='text-6xl font-bold my-8'>About</h1>
        <p className='text-[var(--text-secondary)] py-2 leading-8'>
          I graduated with a{' '}
          <span className='text-[var(--text-bold)] font-bold'>
            Computer Science
          </span>{' '}
          degree from{' '}
          <span className='text-[var(--text-bold)] font-bold'>
            California State University, Sacramento
          </span>
          . I haven't worked at big companies yet, but I've spent a lot of time
          working on my own coding projects. That's how I've been learning and
          getting better.
        </p>
        <p className='text-[var(--text-secondary)] py-2 leading-8'>
          I enjoy making websites and apps that are easy and fun to use. I've
          taught myself how to do a bit of everything – from making things look
          good on the screen to making sure they work well under the hood.
        </p>
        <p className='text-[var(--text-secondary)] py-2 leading-8'>
          Outside of school and coding, I like to keep up with new technology
          stuff, play video games, and just relax. Now that I've finished
          school, I'm looking forward to starting my career in tech, meeting
          people who love coding as much as I do, and working on projects that
          make a difference.
        </p>
      </section>
    </main>
  );
};
