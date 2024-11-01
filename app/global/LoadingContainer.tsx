import React from 'react';
import { Card , CardContent , CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';


function LoadingContainer() {
  return (
    <div className='posts-container'>
        <LoadingPost />
        <LoadingPost />
        <LoadingPost />
        <LoadingPost />
        <LoadingPost />
        <LoadingPost />
    </div>
  )
}

function LoadingPost() {
  return <Card className='w-[920px] mb-4 mt-4'>
    <CardTitle><Skeleton className='h-48 w-full'></Skeleton></CardTitle>
    <CardContent className='p-4'>
      <Skeleton className='h-48 w-full'></Skeleton>
      <Skeleton className='h-4 w-3/4 mt-4'></Skeleton>
      <Skeleton className='h-4 w-1/2 mt-4'></Skeleton>
    </CardContent>
  </Card>
}

export default LoadingContainer