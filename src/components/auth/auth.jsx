import React, {useEffect, useState} from 'react';
import '../../styles/login.scss';
import Signin from "./signin"
import Signup from "./signup"

const Auth = () => {
    const [formType, setformType] = useState('signin');
    
    useEffect(() => {
       
    }, [formType])
    return (
        <div className="login-container flex justify-center">
            <div className="form-container flex justify-center items-center">
                <div className="inner-container flex flex-col">
                    
                    {
                        formType === 'signin'?
                        <Signin register={() => {setformType('signup')}}/> :
                        <Signup submited={() => {setformType('signin')}}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Auth