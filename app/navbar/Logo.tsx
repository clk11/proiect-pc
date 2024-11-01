import Link from 'next/link';
import React from 'react';
import { FaHome } from "react-icons/fa";
import { Button } from '@/components/ui/button';


function Logo() {
  return (
    <Button size='icon' asChild variant={'outline'}>
      <Link href='/'>
      <FaHome className='h-6 w-6 text-red-500 dark:text-red-400' style={{backgroundColor: 'transparent'}}/>
      </Link>
    </Button>
  )
}

export default Logo