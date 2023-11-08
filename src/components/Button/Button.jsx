export const Button = ({ text }) => {
  return (
    <main className=' '>
      <button className='rounded-full bg-[var(--bg-button)] text-[var(--text-bold)] font-bold px-4 py-1 min-w-[80px]'>
        {text}
      </button>
    </main>
  );
};
