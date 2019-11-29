import axios from 'axios'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export interface State {
  state: string
  name: string
}

export const getStates = (): Promise<{ states: Array<string> }> =>
  axios
    .get(`${publicRuntimeConfig.apiUrl || ''}/states`)
    .then(response => response.data)

export const getState = (state: string): Promise<{ state: State }> =>
  axios
    .get(`${publicRuntimeConfig.apiUrl || ''}/states/${state}`)
    .then(response => response.data)
    .then(state => ({ state }))
