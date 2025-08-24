import React from 'react'

function Container({children}) {
  return (
    <div>
      <h1 className='w-full max-w-7xl mx-auto px-4'>{children}</h1>
    </div>
  )
}

export default Container
