import React, {useState, useEffect} from 'react';
import axios from 'axios';

function HelloWorld() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/prueba')
            .then(response => {
                setMessage(response.data);
            })
            .catch(error => {
              console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Mensaje: {message}</h1>
        </div>
    );
}

export default HelloWorld;