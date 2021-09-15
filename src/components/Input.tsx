import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { StandardTextFieldProps } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);


interface BasicTextFieldsProps extends StandardTextFieldProps {

}

export default function BasicTextFields(props: BasicTextFieldsProps) {
  const classes = useStyles();
  const {label, type, ref, onClick, ...others} = props;

  return (
      <TextField id="standard-basic" label={label} type={type} onClick={onClick} {...others}  />
  );
}