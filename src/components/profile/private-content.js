import React from 'react';

const PrivateContent = ({user}) => {
    return(
        <div>
            <div>
                Password: {user.password}
            </div>
        </div>
    )
}

export default PrivateContent;