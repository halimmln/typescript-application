import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import Alert from "@material-ui/lab/Alert";
import { SnackbarProps } from "material-ui";

export const withSnackbar = (WrappedComponent:React.FC) => {
  return (props:any) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("I'm a custom snackbar");
    const [duration, setDuration] = useState(2000);
     /** error | warning | info */

    const showMessage = (message:string, severity = "success", duration = 2000) => {
      setMessage(message);
      setDuration(duration);
      setOpen(true);
    };

    const handleClose = (event:any, reason: string) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
    };

    return (
      <>
        <WrappedComponent {...props} snackbarShowMessage={showMessage} />
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          autoHideDuration={duration}
          open={open}
          onClose={handleClose}
          TransitionComponent={Slide}
        >
          <Alert variant="filled" onClose={() => handleClose} severity= "success">
            {message}
          </Alert>
        </Snackbar>
      </>
    );
  };
};
