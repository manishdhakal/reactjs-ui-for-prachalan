import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import {Link} from 'react-router-dom'
import {InputBase,IconButton, Button, AppBar, Toolbar} from '@material-ui/core'
import LINK from './links'

class  Panel extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        isSearchOpen: false,
    }
    this.openSearch = () =>{
        if(this.state.isSearchOpen === true){
            console.log("search happened!!!\n")
        }
        this.setState({isSearchOpen : true})
    }
    this.closeSearch = () => this.setState({isSearchOpen: false})
  }
  
  render(){
    const {isSearchOpen} = this.state
    const {openSearch, closeSearch} = this

    return (
      <div>
        <AppBar position='fixed' style={{backgroundColor:'white',}}>
          <Toolbar>
            <div style={{flexGrow:1,}}>
              <Button style={{ color:'black', fontFamily:'Cursive', fontSize: 20,fontWeight: 'bold',}} href="/">
                PRACHALAN
              </Button>
            </div>
              
            { !isSearchOpen && 
              LINK.map((page) => (
                <Link to={page.link} style={{textDecoration:'none', flexGrow:1 }}>
                  <Button style={styles.Button}>
                    {page.name}
                  </Button>
                </Link>
              ))
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
                <CloseIcon style={{color:'#000', }} />
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
    Button: {
      textTransform: 'none',
        width: '100%',
        color:'#000',
    },
} 