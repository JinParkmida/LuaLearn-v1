import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import { useTheme } from '../context/ThemeContext';

interface LuaEditorProps {
  code: string;
  setCode: (code: string) => void;
}

const LuaEditor: React.FC<LuaEditorProps> = ({ code, setCode }) => {
  const { theme } = useTheme();
  
  // In a real implementation, we would use a proper Lua language support
  // Here we're using JavaScript syntax highlighting as a fallback
  const languageSupport = javascript();

  return (
    <CodeMirror
      value={code}
      height="300px"
      theme={theme === 'dark' ? vscodeDark : undefined}
      extensions={[languageSupport]}
      onChange={(value) => setCode(value)}
      basicSetup={{
        lineNumbers: true,
        highlightActiveLineGutter: true,
        highlightSpecialChars: true,
        foldGutter: true,
        dropCursor: true,
        allowMultipleSelections: true,
        indentOnInput: true,
        syntaxHighlighting: true,
        bracketMatching: true,
        closeBrackets: true,
        autocompletion: true,
        rectangularSelection: true,
        crosshairCursor: true,
        highlightActiveLine: true,
        highlightSelectionMatches: true,
        closeBracketsKeymap: true,
        defaultKeymap: true,
        searchKeymap: true,
        historyKeymap: true,
        foldKeymap: true,
        completionKeymap: true,
        lintKeymap: true,
      }}
      className="text-sm font-mono"
    />
  );
};

export default LuaEditor;