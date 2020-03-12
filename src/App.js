import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import FileViewer from "./FileViewer"
import SearchBar from "./SearchBar"

import fetch from "node-fetch"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skylink: null,
      content: null,
      contentLength: null,
      language: null,
      filename: null,
    }
  }

  handleSkylinkInputChange = value => {
    this.setState({ skylink: value })
  }

  handleSkylinkInputSubmit = () => {
    fetch("https://skywalker-api.herokuapp.com/" + this.state.skylink).then(
      response => {
        response.json().then(data => {
          this.setState(() => ({
            ...data,
            content: data.content.trim(),
            contentLength: data.content.trim().split(/\r\n|\r|\n/).length,
          }))
        })
        //response.text().then(raw => this.setState({ content: raw.trim() }))
        //console.log(response.headers.get("skynet-file-metadata"))
      }
    )
  }

  render() {
    return (
      <Container maxWidth="md">
        <Typography component="div">
          <br />
          <SearchBar
            handleChange={this.handleSkylinkInputChange}
            handleSubmit={this.handleSkylinkInputSubmit}
            value={this.state.skylink}
          />
          <br />
          <br />
          {this.state.content && (
            <FileViewer
              value={this.state.content}
              contentLength={this.state.contentLength}
              language={this.state.language}
              filename={this.state.filename}
            />
          )}
        </Typography>
      </Container>
    )
  }
}

export default App
