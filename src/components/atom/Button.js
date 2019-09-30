import React from 'react';
import MuiButton from '@material-ui/core/Button';
import MuiAddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    marginLeft: '10px',
    marginBottom: '5px',
  }
});

class Button extends React.Component {
  render() {
    return(
      <MuiButton
        classes={{
          root: classNames(
            this.props.classes.root,
          )
        }}
        variant="contained"
        size="small"
        type="submit"
      >
        <MuiAddIcon />
        add
      </MuiButton>
    );
  }
}
export default withStyles(styles)(Button);