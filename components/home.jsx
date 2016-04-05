import React, { PropTypes } from 'react'

const Home = React.createClass({
  render () {
    return (
      <div className="viewport-cw index-cw">
        <div className="user-avatar">
          <b>?</b>
        </div>
        <p className="tip">尚未绑定手机号</p>
        <div className="btn-cw">
          <a href={'/personal-center'} >
            <span>预约洗车</span>
          </a>
        </div>
      </div>

    )
  }
})

export { Home }
