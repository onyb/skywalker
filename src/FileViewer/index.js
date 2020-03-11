import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Divider from "@material-ui/core/Divider"
import Ace from "./ace"
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/theme-github"

import Header from "./header"

const useStyles = makeStyles({
  root: {},
  pos: {
    marginBottom: 12,
  },
})

export default function OutlinedCard() {
  const classes = useStyles()
  const headerCardContent = {
    backgroundColor: "#f6f8fa",
    maxHeight: "51px",
    marginTop: "-11px",
  }

  const aceCardContent = {
    padding: 0
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent style={headerCardContent}>
        <Header />
      </CardContent>
      <Divider />
      <CardContent style={aceCardContent}>
        <Ace />
      </CardContent>
    </Card>
  )
}
