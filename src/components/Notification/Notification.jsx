import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Message__box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'inherit',
  },

  Message__item: {
    fontSize: '1.1rem',

    '&:not(:last-child)': {
      marginBottom: 10,
    },
  },
});

const Notificatioin = ({ message }) => {
  const classes = useStyles();

  return (
    <div className={classes.Message__box}>
      <p className={classes.Message__item}>Sorry, There was an Error</p>
      <p className={classes.Message__item}>{message}</p>
    </div>
  );
};

export default Notificatioin;
