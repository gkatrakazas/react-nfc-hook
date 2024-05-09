import { useState,useEffect } from 'react';

const useNFCWriter = () => {
    const [isAvailable, setAvailable] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if ('NDEFReader' in window) {
            setAvailable(true);
        } else {
            setError('NFC is not available in this browser.');
            setAvailable(false);
        }
    }, []);

    const writeTag = async (text) => {
        if (!isAvailable) return;

        try {
            const writer = new NDEFReader();
            await writer.write({
                records: [{ recordType: "text", data: text }]
            });
        } catch (err) {
            setError(`Error: ${err.message}`);
        }
    };

    return { isAvailable, writeTag, error };
};

export default useNFCWriter;
