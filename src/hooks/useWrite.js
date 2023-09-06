import { useState } from 'react';

export const useWrite = () => {
    const [text, setText] = useState('');
    const handleWrite = (e) => {
      setText(e.target.value);
    };

    const cleanUp = () => {
        setText('');
    }

    return [text, cleanUp, handleWrite ]
}