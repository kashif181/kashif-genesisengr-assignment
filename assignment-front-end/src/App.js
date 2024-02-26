import logo from './logo.svg';
import './App.css';
import StringRequest from './StringRequest';
import { useState } from 'react';
import StringData from './StringData';
import Loader from './Loader';

function App() {

  const [stringData, setStringData] = useState([]);
  const [stringLoaded, setStringLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const goBack = () => {
    setStringData([]);
    setStringLoaded(false);
  }

  const getStringsFromBE = (formData) => {
    setLoading(true);
    debugger;
    
    fetch('http://localhost:8080/assignment-service/strings/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Server response:', data);
        setStringData(data);
        setStringLoaded(true);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setStringLoaded(false);
        setLoading(false);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
       {!stringLoaded && !loading  && <StringRequest onSubmit={getStringsFromBE} />}
       {stringLoaded  && !loading && <StringData data={stringData} goBack={goBack} />}
       {!stringLoaded && loading  && <Loader />}
      </header>
    </div>
  );
}

export default App;
