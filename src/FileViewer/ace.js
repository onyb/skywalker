import React from "react"

import AceEditor from "react-ace"
import "ace-builds/src-noconflict/theme-github"

import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/mode-markdown"
import "ace-builds/src-noconflict/mode-java"
import "ace-builds/src-noconflict/mode-xml"
import "ace-builds/src-noconflict/mode-json"
import "ace-builds/src-noconflict/mode-golang"
import "ace-builds/src-noconflict/mode-ruby"
import "ace-builds/src-noconflict/mode-mysql"
import "ace-builds/src-noconflict/mode-css"

const Ace = ({ value, language }) => {
  return (
    <AceEditor
      placeholder="Placeholder Text"
      mode={language}
      theme="github"
      name="blah2"
      fontSize={12}
      readOnly={true}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={false}
      width={5000} // some arbitrarily large value
      value={value || ""}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  )
}

export default Ace
