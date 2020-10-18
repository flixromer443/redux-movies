import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor:"transparent",
      width:150,
    color:"white",
      maxWidth: 345,
      display:"inline"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      color:'white'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
   
  }));
  