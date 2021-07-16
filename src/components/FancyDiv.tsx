import React from 'react'

const FancyDiv: React.FC = ({ children }) => {
  return <div className="rounded-lg m-2 p-3 border border-green-500">{children}</div>
}

export default FancyDiv;