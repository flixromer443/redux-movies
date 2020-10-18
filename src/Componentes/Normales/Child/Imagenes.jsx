import React, { useEffect } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import { Button } from '@material-ui/core';
import {useStyles} from './Estilos/Style'
import "./Estilos/Style.css"
import {useDispatch,useSelector}from 'react-redux'
//import {Agregar,otra,Añadir} from '../../../Redux/Actions/Actions'
//import { Link } from 'react-router-dom';

export default function OutlinedCard({title,year,type,image}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const dispatch=useDispatch()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const datos=useSelector(state=>state.Carrito)
  
  console.log(datos.Container)
  return (
      <div className="Container">
    <Card className={classes.root} variant="outlined">
      <CardHeader
        title={title}
        subheader={year}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2"  component="p">
            {type}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Descripcion:</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Consequuntur voluptates odio id, magnam pariatur eligendi minus non laborum!
             Numquam sed voluptas veniam molestias,
             expedita quo eveniet pariatur explicabo. Veritatis, consequatur.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <br/>
   
      
    </div>);
}
