import React, { useState, useEffect } from "react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import styles from "./UserAuth.module.css";
import { auth } from "../../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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

const btnstyle = {
  bgcolor: "#1b5bf7",
  color: "white",
  border: "none",
  background: "#1b5bf7",
  padding: "12px",
  borderRadius: "10px",
  cursor: "pointer",
  transition: "0.3s",
  margin: "10px 5px",
  "&:hover": {
    background: "#174eda",
  },
};

export default function UserAuth() {
  const [open, setOpen] = useState(false);
  const [passOpen, setPassOpen] = useState(false);
  const [sign, setSign] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [login, setLogin] = useState(false)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClosePass = () => setPassOpen(false);
  const handleOpenPass = () => {
    setPassOpen(true);
    handleClose();
  };

  const handleOpenSign = () => setSign(true);
  const handleCloseSign = () => setSign(false);

  const handleReg = async () => {
    //   const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        let userSignIn = userCredential.user;
        setCurrentUser(auth?.currentUser);
        // ...
        alert(auth.currentUser.email);
        console.log(userSignIn);
        setLogin(true)
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
    console.log("ok");
  };

  const handleSignIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        let userSignIn = userCredential.user;
        setCurrentUser(auth?.currentUser);
        alert(auth.currentUser.email);
        setLogin(true)
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
    // console.log("ok")
  };

  const handleSignOut = async () => {
    signOut(auth).then(() => {
      setLogin(false);
    });
    console.log(currentUser.email);
  };

  {
    if (login == false) {
      return (
        <div>
          <div className="btn__group">
            <Button onClick={handleOpen} className="btn" sx={btnstyle}>
              Регистрация
            </Button>
            <Button onClick={handleOpenSign} className="btn" sx={btnstyle}>
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
                  type="email"
                  requeired
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Typography id="modal-modal-title" variant="h6" component="h3">
                Выберите аватар:
              </Typography>
              <Stack direction="row" spacing={2} m={2}>
                <Avatar
                  alt="Remy Sharp"
                  src="/assets/img/user.png"
                  value={"/assets/img/user.png"}
                  onClick={(e) => setAvatar(e.target.value)}
                />
                <Avatar
                  alt="Travis Howard"
                  src="/assets/img/user.png"
                  value={"/assets/img/user.png"}
                  onClick={(e) => setAvatar(e.target.value)}
                />
                <Avatar
                  alt="Cindy Baker"
                  src="/assets/img/user.png"
                  value={"/assets/img/user.png"}
                  onClick={(e) => setAvatar(e.target.value)}
                />
                <Avatar
                  alt="Remy Sharp"
                  src="/assets/img/user.png"
                  value={"/assets/img/user.png"}
                  onClick={(e) => setAvatar(e.target.value)}
                />
                <Avatar
                  alt="Remy Sharp"
                  src="/assets/img/user.png"
                  value={"/assets/img/user.png"}
                  onClick={(e) => setAvatar(e.target.value)}
                />
                <Avatar
                  alt="Travis Howard"
                  src="/assets/img/user.png"
                  value={"/assets/img/user.png"}
                  onClick={(e) => setAvatar(e.target.value)}
                />
                <Avatar
                  alt="Cindy Baker"
                  src="/assets/img/user.png"
                  value={"/assets/img/user.png"}
                  onClick={(e) => setAvatar(e.target.value)}
                />
              </Stack>
              <Button onClick={handleOpenPass} className="btn" sx={btnstyle}>
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
                  type="password"
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
                  type="password"
                  requeired
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <Button className="btn" onClick={handleReg} sx={btnstyle}>
                Войти
              </Button>
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
                  type="email"
                  requeired
                  className={styles.modal__input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  type="password"
                  requeired
                  className={styles.modal__input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <Button className="btn" onClick={handleSignIn} sx={btnstyle}>
                Войти
              </Button>
            </Box>
          </Modal>
        </div>
      );
    } else {
      return (
        <>
          <IconContext.Provider value={{ color: "blue", size: "30px" }}>
            <IoChatboxEllipsesOutline />
          </IconContext.Provider>
          <Button className="btn" onClick={handleSignOut} sx={btnstyle}>
            Выйти
          </Button>
        </>
      );
    }
  }
}
