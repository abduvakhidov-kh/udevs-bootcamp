import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import styles from "./UserAuth.module.css";

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  color: "#000",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  fontWeight: "bold",
  p: 4,
  border: "none",
  borderRadius: 3,
};

export default function UserAuth() {
  const [open, setOpen] = useState(false);
  const [passOpen, setPassOpen] = useState(false);
  const [sign, setSign] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClosePass = () => setPassOpen(false);
  const handleOpenSign =() => setSign(true)
  const handleCloseSign =() => setSign(false)
  
  const handleOpenPass = () => {
    setPassOpen(true);
    handleClose();
  };
  return (
    <div>
      <div className="btn__group">
        <Button onClick={handleOpen} className="btn">
          Регистрация
        </Button>
        <Button onClick={handleOpenSign} className="btn">
          Вход
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.modal}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Введите e-mail
          </Typography>
          <Box
            mt={3}
            sx={{
              display: "flex",
              width: "437px",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              fullWidth
              label="Введите вашу почту"
              className={styles.modal__input}
              requeired
            />
          </Box>
          <Typography id="modal-modal-title" variant="h6" component="h3">
            Выберите аватар:
          </Typography>
          <Stack direction="row" spacing={2} m={2}>
            <Avatar alt="Remy Sharp" src="/assets/img/user.png" />
            <Avatar alt="Travis Howard" src="/assets/img/user.png" />
            <Avatar alt="Cindy Baker" src="/assets/img/user.png" />
            <Avatar alt="Remy Sharp" src="/assets/img/user.png" />
            <Avatar alt="Remy Sharp" src="/assets/img/user.png" />
            <Avatar alt="Travis Howard" src="/assets/img/user.png" />
            <Avatar alt="Cindy Baker" src="/assets/img/user.png" />
          </Stack>
          <Button onClick={handleOpenPass} className="btn">
            Далее
          </Button>
        </Box>
      </Modal>
      {/* ######################################### */}
      <Modal
        open={passOpen}
        onClose={handleClosePass}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Придумай пароль для входа
          </Typography>
          <Box
            mt={3}
            sx={{
              display: "flex",
              width: "437px",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              fullWidth
              label="Введите пароль"
              className={styles.modal__input}
              requeired
            />
          </Box>
          <Box
            mt={3}
            sx={{
              display: "flex",
              width: "437px",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              fullWidth
              label="Подтвердите пароль"
              className={styles.modal__input}
              requeired
            />
          </Box>
          <Button className="btn">Войти</Button>
        </Box>
      </Modal>
      {/* ############################################### */}
      <Modal
        open={sign}
        onClose={handleCloseSign}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Вход на Udevs News
          </Typography>
          <Box
            mt={3}
            sx={{
              display: "flex",
              width: "437px",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              fullWidth
              label="Email"
              requeired
              className={styles.modal__input}
            />
          </Box>
          <Box
            mt={3}
            sx={{
              display: "flex",
              width: "437px",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              fullWidth
              label="Пароль"
              requeired
              className={styles.modal__input}
            />
          </Box>
          <Button className="btn">Войти</Button>
        </Box>
      </Modal>
    </div>
  );
}
