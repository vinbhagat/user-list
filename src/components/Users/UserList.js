import React from 'react';
import classes from './UserList.module.css';

const UserList = props => {

    return (
        <div className={classes.users}>
            {props.users.map((user, idx) => <div className={classes.user} key={`${user}${idx}`}>{user.username} ({user.age} years old)</div>)}
        </div>
    );
};

export default UserList;
