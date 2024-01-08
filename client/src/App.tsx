import './App.css';
import placeHolderImage from './placeholder-image-square.jpg';
import EntryForm from './EntryForm';
import EntryList from './EntryList';
import Header from './Header';
import React, { useState, ChangeEvent } from 'react';

function App() {
  const [EntriesClick, setEntriesClick] = useState(false);
  const [url, setUrl] = useState('');
  const [placeHolder, setPlaceHolder] = useState(placeHolderImage);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    const title = e.target.value;
    setTitle(title);
    return title;
  }

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

  function handleNotesOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const note = e.target.value;
    setNote(note);
    return note;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(title);
  }

  return (
    <>
      <Header onClick={handleClick} />
      {EntriesClick ? (
        <EntryList onClick={handleNewButtonClick} />
      ) : (
        <EntryForm
          onChange={handlePhotoUrlInput}
          onTitleChange={handleTitleChange}
          url={url}
          placeHolder={placeHolder}
          title={title}
          notesOnChange={handleNotesOnChange}
          note={note}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default App;
