import {useState} from 'react';
import { login,logout } from '../store';
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {
    const [newUsername, setNewUserName] = useState("");

    const dispatch = useDispatch();
    return (
        <h1>
            {username}
            <input
            onChange={(e) => {
                setNewUserName(e.target.value);
                }} 
             />
            <button onClick={() => dispatch(login({username: newUsername}))}>
                Submit Login
             </button>
            <button > Logout </button>
        </h1>
    );
};