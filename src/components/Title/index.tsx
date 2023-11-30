import React from 'react'

interface ITitle {
  children: React.ReactNode
  titlename: string
  description: string
}

const Title = ({ children, titlename, description }: ITitle) => {
  return (
    <div>
      <div className="flex items-end gap-4">
        {children}
        <p className="text-3xl font-extrabold">{titlename}</p>
      </div>
      <p className="text-lg text-justify">{description}</p>
    </div>
  )
}

export default Title
