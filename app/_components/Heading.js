import React from 'react'

export default function Heading({children}) {
  return (
    <h2 className="text-5xl font-bold text-foreground text-center py-4">{children} </h2>
  )
}
