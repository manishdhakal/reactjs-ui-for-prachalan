import React from 'react'
import Panel from './Common/Panel'
import {TextField,Input,Button} from "@material-ui/core"
// import Card from '@material-ui/core/Card'
// import CardMedia from '@material-ui/core/CardMedia'


class Post extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isImageSelected : false,
        }

    }
    render(){
       //const {imgSrc,isImageSelected} = this.state
        return(
            <div>
                <div style={{height:65}}></div>
                <Panel />
                <p style={{fontWeight:'bold', paddingLeft:10}}>Description:</p>
                <TextField multiline={true} rows={7} style={{width:'30%', boxShadow: "5px 5px 5px #ccc", paddingLeft:10}} variant='outlined' />
                <p style={{fontWeight:'bold', paddingLeft:10}}>Picture:</p>
                {/* {isImageSelected &&
                // <div>
                //     <Card style={{maxWidth:200}}>
                //         <img alt="" src={imgSrc} />
                //     </Card>
                // </div>
                } */}
                <Input style={{ marginLeft:10, boxShadow:'5px 5px 5px #ccc', }} type='file'/>
                <div style={{padding:10, }}>
                <Button style={{backgroundColor:'green', color:'white',  boxShadow:'5px 5px 5px #ccc',}}>Save</Button>
                </div>
            </div>

        )
    }

}
export default Post