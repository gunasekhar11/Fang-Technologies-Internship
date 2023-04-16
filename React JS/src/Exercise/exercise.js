import React,{ useState } from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [title,setMessage] = React.useState('Invalid');
    const setValid = (event) =>{
        const value = event.target.value;
        if (value.trim().length < 3) {
            setMessage('Invalid');
        } else {
            setMessage('Valid');
        }
    }; 
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={setValid}/>
            <p>{title} message</p>
        </form>
    );
}