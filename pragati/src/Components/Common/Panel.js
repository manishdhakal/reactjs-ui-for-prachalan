import React from 'react'
import MobPanel from './MobPanel'
import DeskPanel from './DeskPanel'
import  Media from 'react-media';

function Panel(){
    return (
        <div>
        <Media query={{ maxWidth: 800 }}>
          {matches =>
            matches ? (
              <MobPanel />
            ) : (
              <DeskPanel />
            )
          }
        </Media>
      </div>
    )
}
export default Panel