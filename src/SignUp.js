import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            await axios.post('http://localhost:5000/signup', { email, password });
            navigate('/login');
        } catch (error) {
            alert('Error creating account');
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};

export default SignUp;
