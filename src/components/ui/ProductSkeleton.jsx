import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="max-w-sm shadow mb-5 h-auto rounded-lg"
    >
        <div className="h-36 w-64 animate-pulse bg-slate-300 rounded-tl-lg rounded-tr-lg">
        </div>
      <div className="mb-5 mt-2.5 flex items-center animate-pulse ">
        <div className='flex w-full gap-4 p-4'>
          <div className='h-4 rounded-full w-4 animate-pulse bg-slate-300'></div>
          <div className='h-4 rounded-full w-4 animate-pulse bg-slate-300'></div>
          <div className='h-4 rounded-full w-4 animate-pulse bg-slate-300'></div>
          <div className='h-4 rounded-full w-4 animate-pulse bg-slate-300'></div>
          <div className='h-4 rounded-full w-4 animate-pulse bg-slate-300'></div>
        </div>
        <div></div>
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="animate-pulse bg-slate-300 w-1/3 h-6 rounded-lg"></div>
        <div className='animate-pulse bg-slate-300 w-1/2 h-6 rounded-lg'></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
