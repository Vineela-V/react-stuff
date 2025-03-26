import { func } from 'prop-types'
import React from 'react'
import { useLinkClickHandler } from 'react-router-dom'

function FunctionClick() {

    function clickHandler(){
        console.log('Button clicked')
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
