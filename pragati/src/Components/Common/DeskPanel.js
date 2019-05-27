import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import {Link} from 'react-router-dom'

class  Panel extends React.Component{
    state = {
        isSearchOpen: false,
    }
    openSearch = () =>{
        if(this.state.isSearchOpen === true){
            console.log("search happened!!!\n")
        }
        this.setState({isSearchOpen : true})
    }
    closeSearch = () => this.setState({isSearchOpen: false})

    render(){
        const {isSearchOpen} = this.state
        const {openSearch, closeSearch} = this

        return (
            <div>
              <AppBar position="static" style={{backgroundColor:'white'}}>
                  <Toolbar>
                    <Typography variant="h6" style={styles.title}>
                        <Link to ={'/'} style={{textDecoration:'none', color:'#000', fontFamily:'Arial'}} >PRACHALAN </Link>
                    </Typography>
                  {!isSearchOpen && 
                    <Typography variant="h7" style={styles.title}>
                        Trending
                    </Typography>
                  }
                  {!isSearchOpen && 
                    <Typography variant="h7" style={styles.title}>
                        Celebrity Outfit
                    </Typography>
                  }
                  {!isSearchOpen && 
                    <Typography variant="h7" style={styles.title}>
                        Beauty
                    </Typography>
                  }
                  {!isSearchOpen && 
                    <Typography variant="h7" style={styles.title}>
                        Wardrobe
                    </Typography>
                  }

                  <IconButton color="inherit" aria-label="" onClick={openSearch} >
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
          </div>
        )
    }
}
export  default Panel

const styles ={
    root: {
      flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        color: '#000',
    },
} 