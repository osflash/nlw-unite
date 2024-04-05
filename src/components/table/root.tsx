import React from 'react'

interface RootProps extends React.ComponentProps<'table'> {}

export const Root: React.FC<RootProps> = props => {
  return (
    <div className="rounded-lg border border-white/10">
      <table className="w-full" {...props} />
    </div>
  )
}
