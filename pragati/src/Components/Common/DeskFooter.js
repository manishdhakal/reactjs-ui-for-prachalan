import React from 'react'
import {Typography, Divider, ListItem, List, SvgIcon} from '@material-ui/core'
import path from '../../media/svg'

function Footer(){
    return(
        <div style={{backgroundColor:'#1d1e21', height:250, marginTop:50}}>
            <div style={{margin:50}}>
                <Typography style={{color:"#ccc",paddingTop:50}}>
                    PRACHALAN
                </Typography>
                <Typography style={{color:"#ccc",}}>
                    074BCT
                </Typography>
                <Divider style={{backgroundColor:'#ccc', height:0.5}}  />

                <List style={{display:'flex', width:'30%', margin:'auto'}}>
                    <ListItem style={{flex:1}}>
                        <Typography style={{color:"#ccc", fontSize:14}}>
                            ABOUT
                        </Typography>
                    </ListItem>
                    <ListItem style={{flex:1}}>
                        <Typography style={{color:"#ccc", fontSize:14}}>
                            TEAM
                        </Typography>
                    </ListItem>
                    <ListItem style={{flex:1, }}>
                        <Typography style={{color:"#ccc", fontSize:14}}>
                            CONTACT
                        </Typography>
                    </ListItem>
                </List>
                <List style={{display:'flex', width:'15%', margin:'auto'}}>
                    <ListItem>
                        <SvgIcon style={{color:"#ccc"}}>
                            <path d={path.facebook}/>
                        </SvgIcon>
                    </ListItem >

                    <ListItem>
                        <SvgIcon style={{color:"#ccc"}}>
                            <path d={path.instagram}/>
                        </SvgIcon>  
                    </ListItem>
                    
                    <ListItem>
                        <SvgIcon style={{color:"#ccc"}}>
                            <path d={path.twitter}/>
                        </SvgIcon>
                    </ListItem>
                </List>
            </div>
        </div>
    )
}

export default Footer