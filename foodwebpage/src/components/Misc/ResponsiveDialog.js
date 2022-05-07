import { Component } from "react";
import { Button } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogActions } from "@mui/material";
import { Link } from "react-router-dom";
import { DialogContentText } from "@mui/material";


class ResponsiveDialog extends Component{

    constructor(props){
        super(props)

        this.state = {
          isLogged : false
        }

        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleDialogOnClose = this.handleDialogOnClose.bind(this)
    }

    handleClickOpen(){
      this.setState(prevState => ({
        isLogged: !prevState.isLogged
      }));
    }

    handleDialogOnClose(){
      this.setState({
        isLogged : false
      })
    }

    render(){
        return (
            <>
              <Button variant="contained" onClick={this.handleClickOpen}>
                {this.props.buttonText}
              </Button>
              <Dialog onClose = {this.handleDialogOnClose} open={this.state.isLogged}>
                <DialogTitle>{this.props.messageTittle}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      {this.props.messageText}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button variant='contained' component={Link} to={'/' + this.props.agreeLink}>{this.props.dialogOptionText}</Button>
                  </DialogActions>
              </Dialog>
              </>
          );
    }
}


ResponsiveDialog.defaultProps = {
  buttonText : "Button Text",
  messageText : 'Message Text',
  messageTittle : 'Message Tittle',
  dialogOptionText : 'Dialog Option Text',
  agreeLink : '#',
};

export default ResponsiveDialog;