import React from 'react'
import Panel from './Common/Panel'
import path from '../media/svg'
// import {Link} from 'react-router-dom'
import { CardActionArea, Card, Typography, CardContent, Divider,List, ListItem, SvgIcon } from '@material-ui/core';

function Home(){
    return (
        <div>
            <Panel />

        {/* <div style={{backgroundColor:'#ccc', height:1500}}></div> */}
            <div style={{marginTop:50,}}>
                
                <div style={{ display:'flex', margin:'0 3%'}}>
                    
                    <div style={{flex:1,borderRight:"1px solid #ccc",}}>
                        <h4 style={{ fontFamily:'cursive', textAlign:'center'}}>Latest News</h4>
                            <Card >
                                <CardActionArea  >
                                    <img src="https://www.gstatic.com/webp/gallery/1.jpg" width={"80%"} alt="" style={{margin:'auto', display:'block'}}  />
                                <CardContent>
                                <Typography color="textPrimary" style={{fontFamily:'cursive', textAlign:'center'}}>
                                    What Barsha Raut is wearing
                                </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                    </div> 
                    <div style={{flex:2,borderRight:"1px solid #ccc",}}>
                        <h4 style={{ fontFamily:'cursive', textAlign:'center'}}>This Summer</h4>
                            <Card >
                                <CardActionArea >
                                    <img src="https://www.gstatic.com/webp/gallery/2.jpg" width={"80%"} alt="" style={{margin:'auto', display:'block'}} />
                                <CardContent>
                                <Typography color="textPrimary" style={{fontFamily:'cursive', textAlign:'center'}}>
                                    Sports to enjoy this summer
                                </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card >
                                <CardActionArea >
                                    <img src="https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5749702030001_5748662679001-vs.jpg" width={"80%"} alt="" style={{margin:'auto', display:'block'}} />
                                <CardContent>
                                <Typography color="textPrimary" style={{fontFamily:'cursive', textAlign:'center'}}>
                                    Pack your bags right away
                                </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                    </div>
                    <div style={{flex:1,}}>
                        <h4 style={{ fontFamily:'cursive', textAlign:'center'}}>Trending Now</h4>
                            <Card >
                                <CardActionArea >
                                    <img src="https://cdn.pixabay.com/photo/2014/07/31/23/28/car-407165_1280.jpg" width={"80%"} alt="" style={{margin:'auto', display:'block'}} />
                                <CardContent>
                                <Typography color="textPrimary" style={{fontFamily:'cursive', textAlign:'center'}}>
                                    Get Trendy
                                </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                    </div>
                </div>
            </div>
            <Divider variant="middle" style={{width:"90%", marginTop:50, backgroundColor:"#1d1e21" }} />
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
        </div> 

    )
}
export default Home
