import { Alert, Box, Collapse, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ErrorModal = () => {
  const error = useSelector((state) => state.superheroes.error);
  const [open, setOpen] = useState(!error);

  useEffect(() => {
    setOpen(!!error);
  }, [error]);

  return (
    Object.keys(error).length && (
      <Box>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          sx={{ poition: "static", top: 30, left: "70%", width: 300 }}
        >
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            mb={2}
          >
            {error?.message || error[0]?.msg}
          </Alert>
        </Modal>
      </Box>
    )
  );
};

export default ErrorModal;
