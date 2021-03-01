import React, { Component } from 'react'
import './classMobx.scss'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
const Div = styled.div`
  color:blue;
  font-size:36px;
`
@inject("classMobxStore")
@observer
class classMobx extends Component {
  add = () => {
    console.log('add')
    this.props.classMobxStore.add()
  }
  subtract = () => {
    console.log('subtract')
    this.props.classMobxStore.subtract()
  }
  render() {
    // console.log('render 了')
    // console.log(this.props)
    // console.log(this.props.classMobxStore)
    // console.log(this.props.classMobxStore.classMobxCount)
    let { classMobxCount: count } = this.props.classMobxStore
    return (
      <>
        <Div>class mobx</Div>
        <div className="classMobx">
          <div className="count">{count}</div>
          <div className="calculator">
            <button onClick={() => this.add()}>+</button>
            <button onClick={() => this.subtract()}>-</button>
          </div>
        </div>
      </>
    )
  }
}
export default classMobx
// export default inject('classMobxStore')(observer(classMobx))