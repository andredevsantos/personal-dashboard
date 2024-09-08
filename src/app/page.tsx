'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/avatar';
import { Widget } from '@/app/components/widget';
import { getDateString } from '@/helpers/getDateString';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

type Color = (typeof colorList)[number];

export default function HomePage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('dark');
  const [color, setColor] = React.useState<Color>('sky');

  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }

  const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-600';

  const date = getDateString(new Date());

  return (
    <main
      className={mode === 'dark' ? 'bg-dark text-white' : 'bg-white text-black'}
    >
      <Head>
        <title>Hi</title>
      </Head>
      <header></header>
      <section className='min-h-screen'>
        <div>
          {/* <Button
            onClick={toggleMode}
            variant={mode === 'dark' ? 'light' : 'dark'}
          >
            Set to {mode === 'dark' ? 'light' : 'dark'}
          </Button> */}
          <div className='flex flex-row gap-4 items-center p-12'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
            <div>
              <h3>Hi, André!</h3>
              <p className='text-gray-300 text-sm'>Today is {date}</p>
            </div>
          </div>
          <section className='grid grid-cols-4 gap-4 p-12'>
            <Widget />
          </section>
          <footer className='absolute bottom-2 text-gray-700'></footer>
        </div>
      </section>
    </main>
  );
}

const colorList = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const;
