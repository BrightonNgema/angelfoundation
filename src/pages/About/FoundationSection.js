import React from 'react'
import { colors } from '../../utils/theme';

const FoundationSection = (props) => {
    return (
        <div className="pt100 pb100" style={{background:colors.angel_black}} >
            <div className="row angel-width mx-auto">
                <div>
                    <div className="mx-auto">
                        <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_white, fontSize:12, width:95, color:colors.angel_black}}>Foundation</h1>
                    </div>
                    <h2 className="heading-lg mt-4 mb-4" style={{fontWeight:'bold', color:colors.angel_orange}}>
                        Realities<br/>Facing Musicians
                    </h2>
                    <p style={{color:colors.angel_white}}>
                        Various studies conducted in South Africa between March and November 2020 confirmed the 
                        devastating impact that COVID-19 has had on musicians. With all live events cancelled and gigs 
                        significantly reduced, even those that have turned to digital platforms have not been able to 
                        recover from lost income. Over 50% of artists have been reported in a recent study that they had 
                        lost between half and all of their income, and further, over 40% were forced to sell critical 
                        assets and equipment to remain solvent. Even more worrying, almost half of the musicians surveyed 
                        indicated that they were uncertain as to their prospects for the future and being able to support themselves.
                        <br/><br/>
                        Artists, already the most vulnerable participants in the music industry value chain, are now in dire need of food, 
                        income and support for their livelihoods. Many are struggling not only to pay for school fees, educational materials, 
                        housing subsidies and loans which have carried them through this period, but also to put food on the table for themselves 
                        and their families. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FoundationSection
