

// const ButtonDialog = () => {
//     return (
//       <section className="button">
//         <details>
//             <summary>Formacao</summary>
//                 <ul>
//                     <li>tetetetet</li>
//                     <li>tetetetet</li>
//                     <li>tetetetet</li>
//                     <li>tetetetet</li>
//                     <li>tetetetet</li>
//                 </ul>
            
//         </details>
        
  
       
//       </section>
//     );
//   };
  
//   export default ButtonDialog;
  












import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} sx={{color: '#fff', border: '1px solid #9c5d41',fontSize: '12px',borderRadius:'8px',mt:'30px'}}>
        Formação
      </Button>
      <BootstrapDialog 
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2, color: '#9c5d41'}} id="customized-dialog-title">
          NUTRY PH
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: '#9c5d41'
            
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers  sx={{bgcolor:'#322f39 '}} >
          <Typography gutterBottom sx={{ m: 0, p: 1, color: '#fff',bgcolor:'#322f39 '}} >
            <ul>
              <li>especialista em nutricao</li>
              <li>especialista em nutricao</li>
              <li>especialista em nutricao</li>
              <li>especialista em nutricao</li>
            </ul>
          </Typography>
          
          
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
