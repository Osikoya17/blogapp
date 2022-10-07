import React from 'react'
import TopBar from '../components/TopBar'

const DefaultLayout = ({children})=> {
  return (
    <>
    <TopBar/>
    <div>{children}</div>
    </>
  )
}

export default DefaultLayout