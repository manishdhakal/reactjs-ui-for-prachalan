import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import List from '@material-ui/core/List';

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
              <AppBar position="static" style={{backgroundColor:'white'}}>
                <Toolbar>
                  <IconButton edge="start" style={styles.menuButton} color="inherit" aria-label="Menu" onClick ={drawerOpen}>
                    <MenuIcon />
                  </IconButton>
                  {!isSearchOpen && <Typography variant="h6" style={styles.title}>
                    PRACHALAN
                    </Typography>
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
        className={styles.drawer}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
        classes={{
          paper: styles.drawerPaper,
        }}
      >
        <div className={styles.drawerHeader}>
          <IconButton onClick={drawerClose}>
            {isDrawerOpen && <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Trending', 'Celebrity Outfit', 'Beauty', 'Wardrobe'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
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