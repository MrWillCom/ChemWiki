import 'github-markdown-css/github-markdown.css'

function Markdown({ children, ...props }) {
  return (
    <div className='markdown-body' {...props}>
      {children}
    </div>
  )
}

export default Markdown
