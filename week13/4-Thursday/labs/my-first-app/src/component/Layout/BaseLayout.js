import React from 'react'
import Header from './Header'

const BaseLayout = (props) => {
  return (
    <>
    <Header />
      {props.childern}
    </>
  )
}

export default BaseLayout
