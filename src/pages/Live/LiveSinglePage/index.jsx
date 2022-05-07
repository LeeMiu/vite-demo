import {useRef} from 'react'
import {useOnClickOutside} from '../../../tools'
import './index.less'

function NobleAdjustModal() {
  const modalRef = useRef(null)
  const closeWindow = () => window.alert('关闭页面')
  useOnClickOutside(modalRef, () => {
    closeWindow()
  })
  return (
    <div className="NobleAdjustModal">
      <div className="modal" ref={modalRef}>
        <div className="close_btn" onClick={() => closeWindow()} />
        <div className="header">贵族调整</div>
        <div className="description">
          亲爱的皮友们，现贵族系统已进行升级，新开通的贵族用户按更新后的开通及续费价格。已开通贵族的皮友，在贵族生效期内续费，仍按旧贵族的标准。新贵族开通价格表如下:
        </div>
        <div className="table" />
        <div className="iknown" onClick={() => closeWindow()}>
          我知道了
        </div>
      </div>
    </div>
  )
}

export default NobleAdjustModal
