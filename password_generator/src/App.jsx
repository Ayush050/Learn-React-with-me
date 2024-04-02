import { useCallback, useEffect, useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) {
      str += '0123456789';
    }
    if (characterAllowed) {
      str += '~!@#$%^&*()_±={}|[]:';
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
     setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
  }; 

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,characterAllowed]);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-2/4 p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-center">Password Generator</h1>
          <div className="flex mb-4">
            <input
              type="text"
              value={password}
              className="border rounded px-4 py-2 w-full mr-2"
              placeholder="Password"
              readOnly
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleCopy}
            >
              Copy
            </button>
          </div>
          <div className="mb-4">
            <input
              type="range"
              value={length}
              min={6}
              max={100}
              onChange={(e) => setLength(e.target.value)}
              className="w-full"
            />
            <label className="block">Length: {length}</label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev)=>!prev)}
              className="mr-2"
            />
            <label className="mr-4">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              onChange={() => setCharacterAllowed((prev)=>!prev)}
              className="mr-2"
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
