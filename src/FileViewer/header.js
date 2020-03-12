import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import grey from "@material-ui/core/colors/grey"

export default function Header({ value, contentLength, filename }) {
  const metadataDivider = {
    height: "20px",
    marginTop: "7px",
  }

  const metadataContainer = {
    display: "flex",
    flexDirection: "row",
    padding: 0,
  }

  const useStyles = makeStyles({
    title: {
      fontSize: 12,
      color: grey[900],
      fontFamily: "Roboto Mono",
    },
  })
  const classes = useStyles()

  return (
    <Typography className={classes.title}>
      <Grid container>
        <Grid item xs={6}>
          <List style={metadataContainer}>
            <ListItem>{filename}</ListItem>
            <Divider orientation="vertical" flexItem style={metadataDivider} />
            <ListItem>{contentLength} line(s)</ListItem>
            <Divider orientation="vertical" flexItem style={metadataDivider} />
            <ListItem>{new Blob([value]).size} bytes</ListItem>
          </List>
        </Grid>
        <Grid item xs={5} />
        <Grid item xs={1}>
          <Button size="small" variant="outlined">
            Raw
          </Button>
        </Grid>
      </Grid>
    </Typography>
  )
}
