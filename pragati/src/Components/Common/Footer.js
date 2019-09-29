import React from 'react'
import Mob from './MobFooter'
import Desk from './DeskFooter'
import  Media from 'react-media';

function Footer(){
    return (
        <div>
        <Media query={{ maxWidth: 800 }}>
          {matches =>
            matches ? (
              <Mob />
            ) : (
              <Desk />
            )
          }
        </Media>
      </div>
    )
}
export default Footer