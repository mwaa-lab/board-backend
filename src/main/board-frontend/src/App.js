import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [test, setTest] = useState('');

    useEffect(() => {
        axios.get('/api/test')
            .then(response => setTest(response.data))
            .catch(error => console.log(error));
    }, []);

  return (
    <div>
        Test : {test}
    </div>
  );
}

export default App;
