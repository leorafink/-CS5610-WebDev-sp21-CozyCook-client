import React from 'react';

const PublicContent = ({user}) => {
    return(
        <div>
            <h1>{user.username}'s CozyCooking</h1>
            <div>
                Role: {user.role}
            </div>

        </div>
    )
}

export default PublicContent;