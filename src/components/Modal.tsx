import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import BasicTextFields from './Input';
import { useForm } from "react-hook-form";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const {register, handleSubmit} = useForm();
  const onSubmit = (data: any) => console.log(data);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className="App" style={modalStyle}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <BasicTextFields label='名前' name='name' inputRef={register} /><br />
        <BasicTextFields label='年齢' type='age' name='age' inputRef={register} /><br />
        <BasicTextFields label='メールアドレス' type='email' name='email' inputRef={register} /><br />  
        <BasicTextFields label='パスワード' type='password' name='password' inputRef={register} /><br />
        {/* <ContainedButtons /> */}
        <button type='submit'>送信</button>

        </form>
  </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}