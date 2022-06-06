import React from 'react';
// import { useSelector } from 'react-redux';
import { useSelectorTyped } from '../hooks/useSelectorTyped';

const UserList: React.FC = () => {
    const {error, loading, users} = useSelectorTyped(state => state.user)
    console.log(error)
    return (
        <div>
            
        </div>
    );
};

export default UserList;