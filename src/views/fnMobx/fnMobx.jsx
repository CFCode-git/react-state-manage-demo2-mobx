import React from 'react'
import './fnMobx.scss'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
const Div = styled.div`
    font-size:36px;
    color: red;
  `


function fnMobx(props) {
  // console.log(props)
  // console.log(props.fnMobxStore)
  // console.log(props.fnMobxStore.fnMobxCount)
  let { fnMobxCount: count } = props.fnMobxStore
  const add = () => {
    console.log('add')
    props.fnMobxStore.add(2)
  }
  const subtract = () => {
    console.log('subtract')
    props.fnMobxStore.subtract(3)
  }
  // console.log(fnMobxStore)
  return (
    <>
      <Div>fn Mobx</Div>
      <div className="fnMobx">
        <div className="count">{count}</div>
        <div className="calculator">
          <button onClick={() => add()}>+</button>
          <button onClick={() => subtract()}>-</button>
        </div>
      </div>
    </>
  )
}
export default inject('fnMobxStore')(observer(fnMobx))
// export default fnMobx