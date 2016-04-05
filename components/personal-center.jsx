import React, { PropTypes } from 'react'

const PersonalCenter = React.createClass({
  render () {
    return (
        <div className="viewport-cw">
          <div className="scroll-box-cw J_offset transition">
            <h1 className="form-tit-cw">修改信息</h1>
            <ul className="form-box-cw">
              <li className="form-item">
                <span className="tit">手机号</span>
                <input type="text" placeholder="请输入手机号" />
              </li>
              <li className="form-item">
                <span className="tit">小区</span>
                <div className="J_area area-cover"></div>
                <input placeholder="选择小区" />
              </li>
              <li className="form-item">
                <span className="tit">车牌号</span>
                <input type="text" placeholder="请输入车牌号" />
              </li>
            </ul>
            <div className="btn-form-cw">
              <div className="back"><a href={'/'}><span>返回</span></a></div>
              <div className="enter"><span>确认修改</span></div>
            </div>
          </div>
        </div>
    )
  }
})

export { PersonalCenter }
