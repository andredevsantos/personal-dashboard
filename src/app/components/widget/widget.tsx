import React from 'react';

import { Checkbox } from '@/app/components/checkbox';

export const Widget = () => {
  return (
    <div className='aspect-square bg-black rounded-md p-8'>
      <div className='text-lg font-bold pb-4'>Tasks for today</div>
      <div className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
        <div className='items-top flex space-x-2'>
          <Checkbox id='terms1' />
          <div className='grid gap-1.5 leading-none'>
            <label
              htmlFor='terms1'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              I'm the first task
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
