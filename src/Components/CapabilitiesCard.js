import React from 'react'
import './Services.css'
const CapabilitiesCard = ({data}) => {
  return (
    <div class="card">
            <div class="face face1">
                <div class="content">
                    {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"/> */}
                    <h3>{data.title}</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>{data.about}</p>
                </div>
            </div>
        </div>
  )
}

export default CapabilitiesCard