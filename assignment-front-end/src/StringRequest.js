import React, { useState } from 'react';

const StringRequest = (props)=>{
    const [name, setName] = useState('');
    const [numberOfStrings, setNumberOfStrings] = useState('');
    const [charactersInEachString, setCharactersInEachString] = useState('');
    const [allowedCharacters, setAllowedCharacters] = useState([]);
    const [uniqueStrings, setUniqueStrings] = useState(false);
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      
      // Prepare data to send to server
      const formData = {
        name,
        numberOfStrings,
        charactersInEachString,
        allowedCharacters,
        uniqueStrings
      };

      console.log(formData);
      props.onSubmit({
        userName: formData.name, 
        numberOfStrings:formData.numberOfStrings, 
        numberOfCharacters: formData.charactersInEachString,
        allowedType: formData.allowedCharacters.toString(),
        uniqueStrings: formData.uniqueStrings
      });
    };
  
    const handleFormReset = () => {
      setName('');
      setNumberOfStrings('');
      setCharactersInEachString('');
      setAllowedCharacters([]);
      setUniqueStrings(false);
    };
  
    return (
      <div style={{ maxWidth: '500px', margin: 'auto' }}>
        <h1 style={{ textAlign: 'center' }}>Request Strings</h1>
        <form onSubmit={handleFormSubmit} onReset={handleFormReset} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ marginLeft: '10px' }} />
          </label>
          <br />
          <label>
            Number of Strings:
            <input type="number" value={numberOfStrings} onChange={(e) => setNumberOfStrings(e.target.value)} style={{ marginLeft: '10px' }} />
          </label>
          <br />
          <label>
            Characters in Each String:
            <input type="number" value={charactersInEachString} onChange={(e) => setCharactersInEachString(e.target.value)} style={{ marginLeft: '10px' }} />
          </label>
          <br />
          <fieldset style={{ marginTop: '10px' }}>
            <legend>Allowed Characters:</legend>
            <label style={{ marginRight: '10px' }}>
              <input type="checkbox" value="n" checked={allowedCharacters.includes('n')} onChange={(e) => setAllowedCharacters(allowedCharacters => e.target.checked ? [...allowedCharacters, 'n'] : allowedCharacters.filter(c => c !== 'n'))} />
              Numeric digits (0-9)
            </label>
            <label style={{ marginRight: '10px' }}>
              <input type="checkbox" value="u" checked={allowedCharacters.includes('u')} onChange={(e) => setAllowedCharacters(allowedCharacters => e.target.checked ? [...allowedCharacters, 'u'] : allowedCharacters.filter(c => c !== 'u'))} />
              Uppercase letters (A-Z)
            </label>
            <label>
              <input type="checkbox" value="l" checked={allowedCharacters.includes('l')} onChange={(e) => setAllowedCharacters(allowedCharacters => e.target.checked ? [...allowedCharacters, 'l'] : allowedCharacters.filter(c => c !== 'l'))} />
              Lowercase letters (a-z)
            </label>
          </fieldset>
          <fieldset style={{ marginTop: '10px' }}>
            <legend>String Uniqueness:</legend>
            <label style={{ marginRight: '10px' }}>
              <input type="radio" value="unique" checked={uniqueStrings} onChange={() => setUniqueStrings(true)} />
              Unique Strings
            </label>
            <label>
              <input type="radio" value="not-unique" checked={!uniqueStrings} onChange={() => setUniqueStrings(false)} />
              Not Unique Strings
            </label>
          </fieldset>
          <br />
          <button type="submit" style={{ marginTop: '10px', marginRight: '10px', padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Submit</button>
          <button type="reset" style={{ marginTop: '10px', padding: '5px 10px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Reset</button>
        </form>
      </div>
    );
  }

export default StringRequest;