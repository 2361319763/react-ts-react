/**
 * dangerouslySetInnerHTML
 * 可用于富文本展示
 */

function dangerouslySetInnerHTML() {
  const myText = "<h2>我是富文本内容</h2>"
  return (
    <span dangerouslySetInnerHTML={
      {
        __html: myText
      }
    }></span>
  )
}

export default dangerouslySetInnerHTML;