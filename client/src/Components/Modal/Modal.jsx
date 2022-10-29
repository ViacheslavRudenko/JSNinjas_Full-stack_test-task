import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, Stack } from "@mui/material";

const modalBoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ modalData, setModalData }) => {
  const { isOpen, title, content } = modalData;
  const closeModal = () => {
    setModalData({ isOpen: false });
  };
  return (
    <Box>
      <Modal open={isOpen} onClose={closeModal}>
        <Box sx={modalBoxStyle}>
          <Typography variant="h6" component="h2" textAlign="center" p={2}>
            {title}
          </Typography>
          <Box>{content}</Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default BasicModal;
