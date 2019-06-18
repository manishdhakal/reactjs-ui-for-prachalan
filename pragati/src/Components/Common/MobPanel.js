import React from 'react'
import {ListItemText, Divider, ListItem, AppBar,InputBase, Toolbar, IconButton,Drawer ,List, Button} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { Link } from 'react-router-dom';
import LINK from './links'

class  Panel extends React.Component{
    state = {
        isSearchOpen: false,
        isDrawerOpen : false,
    }
    clickSearch = () =>{
        if(this.state.isSearchOpen === true){
            console.log("search happened!!!\n")
        }
        this.setState({isSearchOpen : true})
    }
    closeSearch = () => this.setState({isSearchOpen: false})
    drawerOpen = () => this.setState({isDrawerOpen: true})
    drawerClose = () => this.setState({isDrawerOpen: false})
    render(){
      const {isSearchOpen, isDrawerOpen} = this.state
      const {clickSearch, closeSearch, drawerClose, drawerOpen} = this

      return (
        <div>
          <AppBar position="fixed" style={{backgroundColor:'white'}}>
            <Toolbar>
              <IconButton edge="start" style={styles.menuButton} color="inherit" aria-label="Menu" onClick ={drawerOpen}>
                <MenuIcon />
              </IconButton>
              {!isSearchOpen && 
              <div style={{flexGrow:1,}}>
                <Button style={{ color:'black', fontFamily:'Cursive', fontSize: 20,fontWeight: 'bold', }} href="/">
                  PRACHALAN
                </Button>
              </div>
              }
              <IconButton color="inherit" aria-label="" onClick={clickSearch} >
                <SearchIcon style={{color:'#000'}} />
              </IconButton>
                {isSearchOpen && 
                  <InputBase
                  placeholder="Search…"
                  fullWidth ={true}
                  />
                }
                {isSearchOpen &&
                  <IconButton color="inherit" aria-label="" onClick={closeSearch} >
                    <CloseIcon style={{color:'#000'}} />
                  </IconButton>
                }
            </Toolbar>
          </AppBar>
        <Drawer
          style={styles.drawer}
          variant="persistent"
          anchor="left"
          open={isDrawerOpen}
        >
          <div style={styles.drawerHeader}>
            <IconButton onClick={drawerClose}>
              {isDrawerOpen && <ChevronLeftIcon />}
            </IconButton>
          </div>
        <Divider />
          <List>
            {LINK.map((page) => (
              <Link to={page.link} style={{textDecoration:'none', color:'black' }}>
                <ListItem button key={page.name}>
                  <ListItemText primary={page.name} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </Drawer>
      </div>
    )
  }
}
export  default Panel

const styles ={
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: 8*2,
      color: 'black',
    },
    title: {
        flexGrow: 1,
        color: '#000',
        fontFamily:'Cursive',
        fontWeight:'bold',
    },
    drawer: {
      width: 240,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 240,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      justifyContent: 'flex-end',
    },
} 