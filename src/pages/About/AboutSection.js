import React from 'react'
import { colors } from '../../utils/theme';
import { useWindowSize } from '../../utils/useWindow';

const image1 = "https://images.unsplash.com/photo-1541788968749-7683d395688d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"


const AboutSection = (props) => {
    const isSmallScreen = useWindowSize().width < 769
    return (
        <div className="row mx-auto pb100" id="about-summary">
                     <div className="col-lg-5 mr-auto " style={{marginTop:isSmallScreen ? '':'10vh',backgroundImage:`url(${image1})`, backgroundPosition:'center top', backgroundSize:'cover'}}>
                    </div>
                        <div className="col-lg-7" style={{paddingTop:isSmallScreen ? '5vh':'15vh',paddingBottom:isSmallScreen ? '0vh':'5vh'}}>
                            <div className={isSmallScreen ? '' : 'pl30'}>
                                <div >
                                    <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_orange, fontSize:12, width:60, color:'#fff'}}>About</h1>
                                </div>
                                <h2 className="heading-lg bold mt-4 mb-4" style={{color:colors.angel_dark}}>
                                    ANGEL FOUNDATION<br/>ESTABLISHED
                                </h2>
                                <p >
                                    The Angel Foundation for Musicians (AFM) was initiated by a core group of music industry executives in January 2021.<br/><br/>
                                    The financial impact of the lockdown measures was confirmed through a 
                                    widely publicized report commissioned by the South African Cultural Observatory 
                                    (SACO) in association with IKS Cultural Consulting titled “Impact Analysis: Live Music and 
                                    its Venues and the South African economy during COVID-19.”
                                    <br/><br/>
                                   <span className="bold"> The Foundation Management Committee comprises of:</span>
                                   <br/><br/>
                                    <ul>
                                        <li> Nhlanhla Sibisi (Head of the Recording Industry of South Africa),</li>
                                        <li> Antos Stella (Head of Content Connect Africa),</li>
                                        <li> Sipho Dlamini (Head of Universal Music Africa),</li>
                                        <li> Sean Watson (Head of Sony Music Entertainment),</li>
                                        <li> Dr Lindelani Mkhize (Chairman of Contento Group and Co-founder Joyous celebration),</li>
                                        <li> Yvonne “Chaka Chaka” Mhinga (Princess of Africa and Representative of the Global Body of Composers and Authors),</li>
                                        <li> Siyabonga 'Slikour' Metane (Head of Slikour Online) and </li>
                                        <li> Vusi Leeuw (Executive at Warner Music)</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
    )
}

export default AboutSection
