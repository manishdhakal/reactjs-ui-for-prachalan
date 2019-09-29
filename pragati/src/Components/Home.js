import React from 'react'
import Panel from './Common/Panel'
import Footer from './Common/Footer'
import DeskFeed from './Desktop/DeskFeed'
import MobFeed from './Mobile/MobFeed'
import  Media from 'react-media'

function Home(){
    return (
        <div>
            <Panel />
            <Media query={{ maxWidth: 800 }}>
                {matches =>
                    matches ? (
                    <MobFeed />
                    ) : (
                    <DeskFeed />
                    )
                }
            </Media>
            <Footer />
          
        </div> 

    )
}
export default Home
