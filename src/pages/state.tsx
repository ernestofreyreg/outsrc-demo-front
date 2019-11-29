import * as React from 'react'
import { getState, State } from '../lib/api'
import { NextPage } from 'next'
import Link from 'next/link'
import Frame from '../components/Frame'

interface Props {
  state: State
}

const StatePage: NextPage<Props> = ({ state }) => {
  return (
    <Frame>
      <h1>
        State: {state.state}, {state.name}
      </h1>
      <Link href='/'>
        <a>Go Back</a>
      </Link>

      {/* language=CSS */}
      <style jsx>{`
        a {
          background-color: #f0f0f0;
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 4px;
          text-decoration: none;
          color: #0007dd;
          margin-right: 4px;
          margin-bottom: 4px;
        }
      `}</style>
    </Frame>
  )
}

StatePage.getInitialProps = ({ query }) => getState(query.state.toString())
export default StatePage
