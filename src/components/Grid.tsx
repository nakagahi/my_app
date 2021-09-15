
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from './ResumeCard'
import CurriculumCard from './CurriculumCard'
import '../css/grid.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 140,
      width: 100
    },
    control: {
      padding: theme.spacing(2)
    }
  })
);

export default function SpacingGrid() {
//   const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
//   };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2} className="item9">
            <Grid item>
                <Card />
            </Grid>
            <Grid item>
                <CurriculumCard />
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
