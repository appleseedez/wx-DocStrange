import React, { PropTypes } from 'react'

const Home = React.createClass({
  render () {
    return (
      <div className="viewport-cw index-cw">
        <div className="user-avatar">
          <a href={'/personal-center'} style={{display:'block'}}>
            <b>?</b>
          </a>
        </div>
        <p className="tip">尚未绑定手机号</p>
        <div className="btn-cw">
          <a href={'/place-order'}>
            <span>预约洗车</span>
          </a>
        </div>
      </div>

    )
  }
})

export { Home }
