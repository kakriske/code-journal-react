import './App.css';
import placeHolderImage from './placeholder-image-square.jpg';
import EntryForm from './EntryForm';
import EntryList from './EntryList';
import Header from './Header';
import { useState, ChangeEvent } from 'react';

function App() {
  const [EntriesClick, setEntriesClick] = useState(false);
  const [url, setUrl] = useState('');
  const [placeHolder, setPlaceHolder] = useState(placeHolderImage);

  function handleClick() {
    setEntriesClick(true);
  }

  function handleNewButtonClick() {
    setEntriesClick(false);
  }

  function handlePhotoUrlInput(e: ChangeEvent<HTMLInputElement>) {
    const photoUrl = e.target.value;
    setUrl(photoUrl);

    const image = photoUrl
      ? setPlaceHolder(photoUrl)
      : setPlaceHolder(placeHolderImage);

    return image;
  }

  return (
    <>
      <Header onClick={handleClick} />
      {EntriesClick ? (
        <EntryList onClick={handleNewButtonClick} />
      ) : (
        <EntryForm
          onChange={handlePhotoUrlInput}
          url={url}
          placeHolder={placeHolder}
        />
      )}
    </>
  );
}

export default App;
