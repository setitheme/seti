import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';

const CodeEditor = ({
  content = '',
  header = null,
  language = 'javascript',
}) => {
  const [staticContent, setContent] = useState(content);

  useEffect(() => {
    Prism.highlightAll();
  }, [language, content]);

  return (
    <div className="highlight container">
      {header && <h1>{header}</h1>}
      <pre suppressHydrationWarning>
        <code className={`language-${language}`} suppressHydrationWarning>
          {staticContent}
        </code>
      </pre>
    </div>
  );
};

export default CodeEditor;
