import * as React from 'react'
import { getStates } from '../lib/api'
import { NextPage } from 'next'
import Link from 'next/link'
import Frame from '../components/Frame'
import Panel from '../components/Panel'

interface Props {
  states: Array<string>
}

const Index: NextPage<Props> = ({ states }) => {
  return (
    <Frame>
      <h1>States</h1>
      <Panel>
        {states.map(state => (
          <Link key={state} href={`/state?state=${state}`}>
            <a>{state}</a>
          </Link>
        ))}
      </Panel>

      {/* language=CSS */}
      <style jsx>{`
        a {
          background-color: #f0f0f0;
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 4px;
          text-decoration: none;
          color: red;
          margin-right: 4px;
          margin-bottom: 4px;
        }
      `}</style>
    </Frame>
  )
}

Index.getInitialProps = () => getStates()
export default Index
