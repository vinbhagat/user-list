import React, { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
import classes from './UserForm.module.css';
import Button from '../UI/Button';

const UserForm = props => {

    const [user, setUser] = useState({
        username: '',
        age: 0
    });

    const [error, setError] = useState();

    const usernameChangeHandler = ev => {
        setUser(prevUser => {
            return { ...prevUser, username: ev.target.value };
        });
    };

    const ageChangeHandler = ev => {
        setUser(prevUser => {
            return { ...prevUser, age: parseInt(ev.target.value) };
        });
    };

    const resetForm = () => {
        setUser({ username: '', age: 0 });
    }

    const isFormValid = () => {
        if (user.username.trim().length === 0 || user.age <= 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid username & age'
            });
            return false;
        }
        return true;
    }

    const addUserHandler = () => {
        if (isFormValid()) {
            props.addUser(user);
            resetForm();
        } else {
            console.log('Error in form');
        }
    };

    const onClearErrorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onClearError={onClearErrorHandler} />}
            <div className={classes['form-controls']}>
                <div className={classes['form-control']}>
                    <div className={classes.label}>Username</div>
                    <input type='text' className={classes.input} value={user.username} onChange={usernameChangeHandler} />
                </div>
                <div className={classes['form-control']}>
                    <div className={classes.label}>Age (Years)</div>
                    <input type='number' className={classes.input} min='0' value={user.age} onChange={ageChangeHandler} />
                </div>
                <div className={classes['form-control']}>
                    <Button onClick={addUserHandler}>Add User</Button>
                </div>
            </div>
        </>
    );
};

export default UserForm;
