import * as React from 'react'

interface Props {
  children: React.ReactNode
}

const Frame: React.FunctionComponent<Props> = ({ children }) => (
  <div className='frame'>
    {children}

    {/* language=CSS */}
    <style jsx>{`
      .frame {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
)

export default Frame
