import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function Snackbar1({ message ,openStatus }:any) {
  console.log(openStatus);
  const [open, setOpen] = React.useState(false);
  function handleClose(event:any, reason:string) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={openStatus}
        autoHideDuration={2000}
        onClose={() => handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        
        message={message}
        action={[
          <IconButton key="close" onClick={() => handleClose(Event, "timeout")}>
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  );
}
