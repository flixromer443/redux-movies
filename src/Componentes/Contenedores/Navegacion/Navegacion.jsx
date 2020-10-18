import React from 'react';
import clsx from 'clsx';
import {useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './Estilo'
import './Estilo.css'
import { Link } from 'react-router-dom';
//Iconos
//import InboxIcon from '@material-ui/icons/MoveToInbox';
//import MailIcon from '@material-ui/icons/Mail';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import ToysIcon from '@material-ui/icons/Toys';
import SportsRugbyIcon from'@material-ui/icons/SportsRugby';
import ShareIcon from'@material-ui/icons/Share';
import { useDispatch ,useSelector} from 'react-redux';
import {Buscar} from '../../../Redux/Actions/Actions' 
import { useState } from 'react';




export default function PersistentDrawerLeft() {
  const [palabra,setPalabra]=useState("");
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch()
  const datos=useSelector(state=>state.Buscador)
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon color="initial"/>
          </IconButton>
          <Typography variant="h6" noWrap>
            Redux Movies
           
          </Typography>
          <Typography>

          
            
              <input type="text"
               placeholder="Buscar..." 
               onChange={(e)=>setPalabra(e.target.value)} className="inpbusqueda"/>
    
          <Link to="/Normales/VistaPrevia">
            <button onClick={()=>dispatch(Buscar(palabra))} className="btnbusqueda">Buscar</button>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List style={{color:"white"}}>
          <Link to="/">
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon> <ToysIcon /></ListItemIcon>
                <ListItemText primary="Inicio (Productos)"/>
            </ListItem>
            </Link>
            <Link to="/Normales/Accion">
            <ListItem button onClick={handleDrawerClose} >
              <ListItemIcon><VideogameAssetIcon/></ListItemIcon>
              <ListItemText primary="Accion"/>
            </ListItem>
            </Link>
            <Link to="/Normales/Terror">
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon><SportsRugbyIcon/></ListItemIcon>
              <ListItemText primary="Terror"/>
            </ListItem>
            </Link>
            <Link to="/Carrito/Carrito">
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon><SportsRugbyIcon/></ListItemIcon>
              <ListItemText primary="Carrito"/>
            </ListItem>
            </Link>
        </List>
       
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
