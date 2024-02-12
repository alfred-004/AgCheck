import React from 'react'

export default function Topics({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <div className='flex-grow flex-1'>
            {children}
          </div>
      </>
    )
}
