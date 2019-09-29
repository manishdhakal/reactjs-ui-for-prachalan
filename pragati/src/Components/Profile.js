import React from 'react'
import Panel from './Common/Panel'
import DeskProfile from './Desktop/DeskProfile'
import MobProfile from './Mobile/MobProfile'
import  Media from 'react-media'
import Footer from './Common/Footer';

function Profile(){
    return (
        <div>
            <Panel />
            <Media query={{ maxWidth: 800 }}>
                {matches =>
                    matches ? (
                    <MobProfile />
                    ) : (
                    <DeskProfile />
                    )
                }
            </Media>
            <Footer />
        </div> 

    )
}
export default Profile