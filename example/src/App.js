import React from 'react';
// import { useNFCReader, useNFCWriter } from 'react-nfc-hook';  // Assuming both hooks are exported from 'react-nfc-hook'

import useNFCReader from './hooks/useNFCReader';
import useNFCWriter from './hooks/useNFCWriter'; // Uncomment and use these if hooks are locally defined

function App() {
  const { isAvailable: canRead, error: readError, data, startScan } = useNFCReader();
  const { isAvailable: canWrite, error: writeError, writeTag } = useNFCWriter();

  const handleWrite = () => {
    const textToWrite = "Hello NFC World!";
    writeTag(textToWrite);
  };

  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: 50 }}>
      <header className="App-header" style={{ marginBottom: 20 }}>
        <h1 style={{ color: '#333' }}>NFC Reader and Writer</h1>
        <p>Interact with NFC tags using the buttons below!</p>
        <div style={{ margin: '20px 0' }}>
          <button onClick={startScan} disabled={!canRead} style={buttonStyle}>
            Scan NFC Tag
          </button>
          <button onClick={handleWrite} disabled={!canWrite} style={buttonStyle}>
            Write to NFC Tag
          </button>
        </div>
      </header>
      <section>
        {readError && <p style={errorStyle}>Error Reading: {readError}</p>}
        {writeError && <p style={errorStyle}>Error Writing: {writeError}</p>}
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {data && data.map((record, index) => (
            <li key={index} style={dataItemStyle}>
              {record.type}: {record.data}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  margin: '0 10px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
  fontSize: '16px',
};

const errorStyle = {
  color: 'red',
  fontWeight: 'bold'
};

const dataItemStyle = {
  backgroundColor: '#f4f4f4',
  padding: '10px',
  margin: '5px 0',
  borderRadius: 4
};

export default App;
