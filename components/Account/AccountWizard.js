import React from 'react';

const AccountWizard = ({title}) => {
    return (
        <div className='bg-white p-5 uppercase text-lg text-accent border-b border-thin'>
            {title}
        </div>
    );
};

export default AccountWizard;