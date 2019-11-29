import * as React from 'react'

interface Props {
  children: React.ReactNode
}

const Panel: React.FunctionComponent<Props> = ({ children }) => (
  <div className='panel'>
    {children}

    {/* language=CSS */}
    <style jsx>{`
      .panel {
        display: inline-flex;
        flex-direction: row;
        width: 50%;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
)

export default Panel
