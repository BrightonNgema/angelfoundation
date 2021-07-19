import React from 'react'
import { colors } from '../../utils/theme'
import { Button } from '../../components'

const ApproachSection = (props) => {
    return (
        <div className="pt100 pb100 mx-auto" style={{background:colors.angel_orange}} >
            <div className="row angel-width mx-auto">
                <div className="col-12 text-center">
                    <div className="mx-auto" style={{display:'flex', justifyContent:'center'}}>
                        <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_black, fontSize:12, width:80, color:'#fff'}}>Solution</h1>
                    </div>
                    <h1 className="heading-lg bold mt-2 mb-4" style={{color:colors.angel_white}}>
                        Want To Help?
                    </h1>
                </div>
            
                <div className="text-center">
                    <Button
                        className="dark lg mt-3"
                        title="How You Can Help?"
                        onClick={() =>  props.history.push('/our-approach#how-can-you-help')}
                    />
                </div>
            </div>
        </div>
    )
}

export default ApproachSection
