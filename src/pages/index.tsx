import type { NextPage } from 'next';

import NavBar from '@/components/NavBar';

const HomePage: NextPage = (): JSX.Element => {
  return (
    <div className='min-w-fit bg-black'>
      <NavBar />
    </div>
  );
};
export default HomePage;
