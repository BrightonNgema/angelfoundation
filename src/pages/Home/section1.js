import React from 'react'
import { colors } from '../../utils/theme'
import Button from '../../components/Button';

const image1 = "https://images.unsplash.com/photo-1603545908215-1010e64eb840?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80"


const Section1 = (props) => {
    return (
        <div className="row angel-width mx-auto pb100" id="about-summary">
            <div className="col-md-6" style={{paddingTop:'15vh', paddingBottom:'15vh'}}>
                <div className="pr30">
                    <div >
                        <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_orange, fontSize:12, width:60, color:'#fff'}}>About</h1>
                    </div>
                    <h2 className="mt-4 mb-4" style={{lineHeight:1, fontSize:55, textTransform:'capitalize', fontWeight:'bold', color:colors.angel_dark}}>Realities Facing Musicians</h2>
                    <p >
                        Various studies conducted in South Africa between March and November 2020 confirmed the 
                        devastating impact that COVID-19 has had on musicians. With all live events cancelled and gigs 
                        significantly reduced, even those that have turned to digital platforms have not been able to 
                        recover from lost income. 
                    </p>
                    <Button
                        className="primary lg mt-3"
                        title="Discover More"
                        onClick={() => props.history.push('/about')}
                    />
                </div>
            </div>
            <div className="col-md-6 ml-auto" style={{backgroundImage:`url(${image1})`, backgroundPosition:'center top', backgroundSize:'cover'}}>
            </div>
        </div>
    )
}

export default Section1
