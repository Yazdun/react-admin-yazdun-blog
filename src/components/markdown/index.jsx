import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import s from './styles.module.scss'

export const Markdown = ({ markdown }) => {
  // api doesnt return < > so I had to use regex to replace it in the markdown
  const content = markdown?.replace(/&lt;/g, '<').replace(/&gt;/g, '>')

  if (!markdown) {
    return (
      <div className={s.container}>
        <p>Write some markdown and see the magic happens !</p>
      </div>
    )
  }

  return (
    <div className={s.container}>
      <ReactMarkdown
        children={content}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={dracula}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      />
    </div>
  )
}
