import React from 'react'
import { colors } from '../../utils/theme'
import Button from '../../components/Button';

const Section2 = (props) => {
    return (
        <div className="pt100 pb100" style={{background:colors.angel_dark}} >
            <div className="row angel-width mx-auto">
                <div>
                    <div className="mx-auto">
                        <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_black, fontSize:12, width:95, color:'#fff'}}>Foundation</h1>
                    </div>
                    <h2 className="heading-lg mt-4 mb-4" style={{fontWeight:'bold', color:colors.angel_white}}>
                        Realities<br/>Facing Musicians
                    </h2>
                    <p style={{color:colors.angel_white}}>
                        Various studies conducted in South Africa between March and November 2020 confirmed the 
                        devastating impact that COVID-19 has had on musicians. With all live events cancelled and gigs 
                        significantly reduced, even those that have turned to digital platforms have not been able to 
                        recover from lost income. 
                    </p>
                    <Button
                        className="dark lg mt-3"
                        title="Discover More"
                        onClick={() => props.history.push('/about')}
                    />
                </div>
            </div>
        </div>
    )
}

export default Section2
