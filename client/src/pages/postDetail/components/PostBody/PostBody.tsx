import * as S from './PostBody.style'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import React from 'react'

interface Props {
  content: string
}

export default function PostBody({ content }: Props) {
  return (
    <S.Container>
      <S.Content
        components={{
          code({ inline, className, children }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter language="ts" PreTag="div">
                {String(children[0])?.replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className}>{children}</code>
            )
          },
        }}
      >
        {content}
      </S.Content>
    </S.Container>
  )
}
