import React from 'react'
import {Card, Typography, TextField} from '@material-ui/core'

function Login(){
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         username : '',
    //         password : ''
    //     }
    // }

    // const username='', password =''
    const screenHeight = window.innerHeight
    const cardDim = 400
    const verticalMargin = (screenHeight-cardDim)/2
    return (
        <div style={{width:"100%", height:screenHeight , backgroundColor:'#1d1e21',justifyContent:'center', display:'flex'}}>
            
            <Card style={{width:cardDim, height:cardDim, marginTop:verticalMargin, marginBottom:verticalMargin }}>
                
                <div style={{margin:20, height:cardDim-40, width:cardDim-40}}>
                    
                    <Typography style={{textAlign:'center'}} color="textPrimary" variant="h6">
                        Login to Your Account
                    </Typography>
                    <Typography color="textPrimary"style={{marginTop:10}}>
                        Email
                    </Typography>
                    <TextField type='text' variant='outlined' placeholder="Email" />
                    <Typography color="textPrimary" style={{marginTop:10}}>
                        Password
                    </Typography>
                    <TextField type="password" variant='outlined' placeholder="Password"/>
                    
                </div>
            </Card>
        </div>
    )


}
export default Login
