# react-nfc-hook

`react-nfc-hook` is a custom React hook designed to simplify NFC interactions in your React applications. It leverages the Web NFC API to read and write to NFC tags, providing a seamless integration with modern web browsers that support NFC operations.

## Features

- **Easy to Use**: Simple React hook that abstracts complex NFC operations.
- **Flexible**: Supports reading from and writing to NFC tags.
- **Lightweight**: Minimal setup required, with no external dependencies.

## Installation

Install `react-nfc-hook` with npm:

```bash
npm install react-nfc-hook
```

Or with yarn:

```bash
yarn add react-nfc-hook
```

##Usage
To use react-nfc-hook, simply import the hook into your React component and call it as follows:

```
import React from 'react';
import { useNFCReader } from 'react-nfc-hook';

function NFCComponent() {
  const { nfcData, error, writeNFC } = useNFCReader();

  const handleWrite = () => {
    writeNFC('Hello NFC World!');
  };

  return (
    <div>
      <h1>NFC Reader</h1>
      {error && <p>Error: {error}</p>}
      <p>NFC Data: {nfcData}</p>
      <button onClick={handleWrite}>Write to NFC Tag</button>
    </div>
  );
}

export default NFCComponent;
```

## Browser Support
Please note that the Web NFC API is only supported on Android devices in Chrome. Make sure to test your NFC functionalities in a compatible environment.

Contributing
Contributions are welcome! Please open an issue to discuss your ideas or submit a Pull Request.

## License
react-nfc-hook is open-sourced software licensed under the MIT license.
