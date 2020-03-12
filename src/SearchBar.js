import React from "react"

import OutlinedInput from "@material-ui/core/OutlinedInput"
import FormControl from "@material-ui/core/FormControl"
import InputAdornment from "@material-ui/core/InputAdornment"
import IconButton from "@material-ui/core/IconButton"
import InputLabel from "@material-ui/core/InputLabel"
import GetAppIcon from "@material-ui/icons/GetApp"

const SearchBar = props => (
  <FormControl fullWidth variant="outlined">
    <InputLabel htmlFor="outlined-skylink">Skylink</InputLabel>
    <OutlinedInput
      value={props.value}
      id="outlined-skylink"
      variant="outlined"
      size="small"
      labelWidth={60}
      startAdornment={<InputAdornment position="start">sia://</InputAdornment>}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            disabled={!props.value || props.value.length !== 46}
            onClick={() => props.handleSubmit()}
          >
            <GetAppIcon />
          </IconButton>
        </InputAdornment>
      }
      onChange={e => props.handleChange(e.target.value)}
    />
  </FormControl>
)

export default SearchBar
