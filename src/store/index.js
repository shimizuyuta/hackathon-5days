import React, { createContext, useReducer } from 'react'

const initialState = {
  cosme: [],
  isLoading: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_COSME':
      return {
        ...state,
        cosme: action.payload.cosme
      }

    case 'SET_LOADING':
      return {
        isLoading: action.payload
      }

    default:
      return state
  }
}

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null
})

export const StoreProvider = ({ children }) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState)
  return (
    <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>
  )
}