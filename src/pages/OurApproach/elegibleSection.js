import React from 'react'
import { colors } from '../../utils/theme'

const eligible = "https://images.unsplash.com/flagged/photo-1590425113058-3a2678b4cdad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
const EligibleSection = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6"
                    style={{backgroundPosition:'center', 
                    backgroundSize:'cover',minHeight:'30vh',
                    backgroundImage:`linear-gradient(
                    to bottom,
                    rgba(0,0,0, 0.5),
                    rgba(0,0,0, 0)),url(${eligible})`}}
                >

                </div>
                <div className="col-md-6 pt100 pb60">
                    <div className="row angel-width mx-auto">
                        <div className="col-12">
                            <div className="mx-auto" style={{display:'flex',}}>
                                <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_orange, fontSize:12, width:90, color:'#fff'}}>qualifying</h1>
                            </div>
                            <h1 className="heading-md bold mt-2 mb-4 mx-auto" style={{color:colors.angel_black, width:700, alignSelf:'center'}}>
                                ELIGIBLE APPLICANTS   
                            </h1>
                            <p className="bold">
                                Even though the AFM would like to assist everyone affected, priority will 
                                be given to professionals who fall into the  following categories:
                            </p>
                            <ul>
                                <li>Those who are members of any musician organisation, record company, a copyright collection agency in South Africa; or</li>
                                <li>Those who are featured performers, backing vocalists or session musicians in any commercially released music sound recording; or</li>
                                <li>Those who are active in the music industry and generate the majority of their income from music performances; and</li>
                            </ul>
                            <p className="bold">
                                Exclusions
                            </p>
                            <ul>
                                <li>Musicians who are gainfully employed or have received any income support from the government, related agencies, or private organisations/Foundations in the previous 3 months will not be qualify.</li>
                                <li>Members of the Management Committee of the Angel Foundation and its employees shall not be eligible for grants from the Foundation during their term of office.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EligibleSection
