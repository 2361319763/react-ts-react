import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import hljs from './highlight';
import 'highlight.js/styles/default.css';
import "./index.scss"

type CodeBlockProps = {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  const preRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleClip = () => {
    let textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.setAttribute('readonly', 'readonly');
    textarea.value = code;
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    setCopied(true)
    setTimeout(()=>{
      setCopied(false)
    },2000)
  }

  useEffect(() => {
    if (preRef.current) {
      hljs.highlightElement(preRef.current);
    }
  }, [code]);

  return (
    <div className="code-block" style={{ position: 'relative', marginTop: 8, minWidth: '60vw' }}>
      <pre>
        <code id={language} ref={preRef} className={language}>
          {code}
        </code>
      </pre>
      <Button onClick={()=>{handleClip()}} className='copy_btn'>
        {copied ? '已复制' : '复制'}
      </Button>
    </div>
  );
}

export default CodeBlock;