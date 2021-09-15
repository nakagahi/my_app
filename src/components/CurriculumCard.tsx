import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 300,
    width: 500,
    textAlign: 'center',
    marginRight: 200,
    marginTop: 50,
    border: 'solid'
  },
  media: {
    height: 200,
  },
});

export default function CurriculumCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2">
            職務経歴書
          </Typography>
        <CardMedia
          className={classes.media}
          image="https://thumb.ac-illust.com/58/584a8069f9e442127766cbc26ee82e62_t.jpeg"
        />
      <CardActions>
        <Button variant="contained" color="primary">
            職務経歴書を作成する
        </Button>
      </CardActions>
    </Card>
  );
}