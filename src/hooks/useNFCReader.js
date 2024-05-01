import { useEffect, useState } from 'react';

const useNFCReader = () => {
  const [isAvailable, setAvailable] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if ('NDEFReader' in window) {
      setAvailable(true);
    } else {
      setError('NFC is not available in this browser.');
      setAvailable(false);
    }
  }, []);

  const startScan = () => {
    if (!isAvailable) return;

    const reader = new NDEFReader();
    reader.scan().then(() => {
      reader.onreading = event => {
        const records = event.message.records.map(record => ({
          type: record.recordType,
          mediaType: record.mediaType,
          data: record.data ? new TextDecoder().decode(record.data) : 'No data'
        }));
        setData(records);
      };
    }).catch(err => {
      setError(`Error: ${err.message}`);
    });
  };

  return { isAvailable, error, data, startScan };
};

export default useNFCReader;
