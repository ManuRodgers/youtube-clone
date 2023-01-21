import { zodResolver } from '@hookform/resolvers/zod';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Input, Paper } from '@mui/material';
import React, { memo } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const searchTermSchema = z.object({
  searchTerm: z.string().min(2, 'Too Short!'),
});
type SearchTermInput = z.infer<typeof searchTermSchema>;

const SearchBar = (): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchTermInput>({
    resolver: zodResolver(searchTermSchema),
    defaultValues: { searchTerm: '' },
  });
  const onSubmit: SubmitHandler<SearchTermInput> = (searchTermInput) => {
    console.log('searchTermInput: ', searchTermInput);
  };
  return (
    <Paper
      className='flex min-w-min flex-row rounded-2xl border border-solid border-slate-200 pl-1 shadow-none sm:mr-1'
      component='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name='searchTerm'
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            className='w-96 border-none outline-none'
            placeholder='Search...'
            disableUnderline={true}
          />
        )}
      />
      <IconButton
        type='submit'
        aria-label='search'
        className='p-2 text-red-500'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default memo(SearchBar);
