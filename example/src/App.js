import React from 'react';
import { useNFCReader } from 'react-nfc-hook';

// import useNFCReader from './hooks/useNFCReader';

function App() {
  const { isAvailable, error, data, startScan } = useNFCReader();

  return (
    <div className="App">
      <header className="App-header">
        <p>Click the button to start scanning for NFC tags.</p>
        <button onClick={startScan} disabled={!isAvailable}>
          Scan NFC Tag
        </button>
        {error && <p>Error: {error}</p>}
        {data && (
          <ul>
            {data.map((record, index) => (
              <li key={index}>{record.data}</li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
