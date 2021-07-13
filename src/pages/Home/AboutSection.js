import React from 'react'
import { colors } from '../../utils/theme'
import Button from '../../components/Button';

const image1 = "https://images.unsplash.com/photo-1603545908215-1010e64eb840?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80"


const Section1 = (props) => {
    return (
        <div className="row angel-width mx-auto pb100" id="about-summary">
            <div className="col-lg-6" style={{paddingTop:'15vh', paddingBottom:'15vh'}}>
                <div className="pr30">
                    <div >
                        <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_orange, fontSize:12, width:60, color:'#fff'}}>About</h1>
                    </div>
                    <h2 className="heading-lg bold mt-4 mb-4" style={{color:colors.angel_dark}}>
                        ANGEL FOUNDATION<br/>ESTABLISHED
                    </h2>
                    <p >
                        The Angel Foundation for Musicians (AFM) was initiated by a core group of music industry executives in January 2020.<br/><br/>
                        The financial impact of the lockdown measures was confirmed through a widely publicized report commissioned by the South African Cultural Observatory (SACO) in association with IKS Cultural Consulting titled “Impact Analysis: Live Music and its Venues and the South African economy during COVID-19.”
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
