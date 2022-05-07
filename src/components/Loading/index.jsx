import PT from 'prop-types'
import './index.less'

function Loading({content}) {
  return (
    <div className="Loading">
      <div className="Loading-main">
        <span className="Loading-icon" />
      </div>
      <div className="Loading-text">{content}</div>
    </div>
  )
}
Loading.propTypes = {
  content: PT.string,
}
Loading.defalutProps = {
  content: '加载中...',
}
export default Loading
