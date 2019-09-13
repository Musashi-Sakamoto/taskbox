import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core'

const styles = () => ({
});

function OutlinedTextField({classes}) {

  return (
    <TextField
        margin="dense"
        id="name"
        type="email"
        variant='outlined'
        inputProps={{ 'aria-label': 'bare' }}
    />
  );
}

export default withStyles(styles)(OutlinedTextField);