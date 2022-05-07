import img from './empty.png'
import './index.less'

function Empty() {
  return (
    <div className="Empty">
      <div className="Empty-main">
        <img src={img} alt="" />
        <p>啥都没找到</p>
      </div>
    </div>
  )
}

export default Empty
