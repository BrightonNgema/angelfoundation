import React from 'react'
import { colors } from '../../utils/theme'


const AngelMethodologySection = () => {
    return (
        <div className="pt100 pb100" style={{background:colors.angel_white}} >
            <div className="row angel-width mx-auto">
                <div>
                    <div className="mx-auto">
                        <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_black, fontSize:12, width:95, color:'#fff'}}>Foundation</h1>
                    </div>
                    <h2 className="heading-lg mt-4 mb-4" style={{fontWeight:'bold', color:colors.angel_dark}}>
                        ANGEL METHODOLOGY 
                    </h2>
                    <p style={{color:colors.angel_dark}}>
                        To create talkability and  amplify The Angel Foundation for Musicians initiative, PR will 
                        seed the campaign messages using various media platforms – demonstrating the 
                        following sentiments which are key to the organisation:
                        <ul className="mt-2">
                            <li>Encouraging South Africans to contribute towards the fund for musicians</li>
                            <li>Showcase the importance of supporting local musicians during this difficult time</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AngelMethodologySection
