import React from 'react'
import { colors } from '../../utils/theme'


const GovernmentSection = () => {
    return (
        <div className="pt100 pb100" style={{background:colors.angel_white}} >
            <div className="row angel-width mx-auto">
                <div>
                    <div className="mx-auto">
                        <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_black, fontSize:12, width:95, color:'#fff'}}>Foundation</h1>
                    </div>
                    <h2 className="heading-lg mt-4 mb-4" style={{fontWeight:'bold', color:colors.angel_dark}}>
                        GOVERNMENT INTERVENTION 
                    </h2>
                    <p style={{color:colors.angel_dark}}>
                        In 2020, the government availed R300 million to the National Arts Council (NAC) as part of the 
                        Presidential Empowerment Stimulus Programme in response to the challenges brought about 
                        by the COVID-19 pandemic. This was aimed at employment creation and retention initiatives 
                        for artists and others in the cultural sector. 
                        <br/> <br/>
                        A group of about 20 to 50 demonstrators staged a sit-in at the National Arts Council offices in 
                        Newtown and the Artscape Theatre in Cape Town in March 2021, pleading for answers. 
                        These include dancers, singers, actors, musicians, poets, puppeteers, visual artists and crafters.
                        <br/> <br/>
                        Creatives said that the NAC needed to supply a list of all those who benefited from the COVID-19 relief 
                        fund and they were demanding to know what happened to the rest of the money.  
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GovernmentSection
