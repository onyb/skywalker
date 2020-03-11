import React from "react"

import AceEditor from "react-ace"

const Ace = props => {
  return (
    <AceEditor
      placeholder="Placeholder Text"
      mode="javascript"
      theme="github"
      name="blah2"
      fontSize={12}
      readOnly={true}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={false}
      value={`function onLoad(editor) {
  console.log("i've loaded");
}`}
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