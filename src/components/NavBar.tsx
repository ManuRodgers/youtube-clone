import { Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { memo } from 'react';

import SearchBar from '@/components/SearchBar';

import { logo } from '@/utils/constants';

const NavBar = (): JSX.Element => {
  return (
    <Stack className='sticky flex min-w-min flex-row items-center justify-between bg-black p-2'>
      <Link href='/'>
        <Image src={logo} alt='logo of the youtube' width={45} height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};
export default memo(NavBar);
