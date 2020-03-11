import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import FileViewer from "./FileViewer"

export default function App() {
  return (
    <Container maxWidth="md">
      <Typography
        component="div"
      >
        <FileViewer />
      </Typography>
    </Container>
  )
}
