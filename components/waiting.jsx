import React, { PropTypes } from 'react'

const Waiting = React.createClass({
  render () {
    return (
      <div className="viewport-cw" style={{height:'570px'}}>
        <h1 className="wait-tit-cw">等待计时...</h1>
        <div className="time-cw">
          <span className="num">00</span>
          <span className="txt">时</span>
          <span className="num">45</span>
          <span className="txt">分</span>
          <span className="num">58</span>
          <span className="txt">秒</span>
        </div>
        <div className="cansel-btn-cw">
          <a href={'/place-order'}>
            <span>取消</span>
          </a>

        </div>
      </div>

    )
  },
  componentDidMount() {
  }
})

export { Waiting }
