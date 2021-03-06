import React from 'react'
import Mobile from './MobPanel'
import Desktop from './DeskPanel'
import  Media from 'react-media';

function Panel(){
    return (
        <div>
        <Media query={{ maxWidth: 800 }}>
          {(matches) =>
            matches ? (
              <Mobile />
            ) : (
              <Desktop />
            )
          }
        </Media>
      </div>
    )
}
export default Panel