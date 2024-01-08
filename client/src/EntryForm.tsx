import React, { ChangeEvent } from 'react';

interface EntryFormProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  url: string;
  placeHolder: string;
  title: string;
  onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  note: string;
  notesOnChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function EntryForm({
  onChange,
  url,
  placeHolder,
  title,
  onTitleChange,
  note,
  notesOnChange,
  onSubmit,
}: EntryFormProps) {
  return (
    <>
      <div className="container" data-view="entry-form">
        <NewEntryText />
        <Form
          onChange={onChange}
          url={url}
          placeHolder={placeHolder}
          title={title}
          onTitleChange={onTitleChange}
          note={note}
          onNotesChange={notesOnChange}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
}

function NewEntryText() {
  return (
    <div className="row">
      <div className="column-full d-flex justify-between">
        <h1 id="formH1">New Entry</h1>
      </div>
    </div>
  );
}

interface FormProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  url: string;
  placeHolder: string;
  title: string;
  onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onNotesChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  note: string;
  onSubmit: (e: React.FormEvent) => void;
}

function Form({
  onChange,
  url,
  placeHolder,
  title,
  onTitleChange,
  onNotesChange,
  note,
  onSubmit,
}: FormProps) {
  return (
    <form id="entryForm">
      <div className="row margin-bottom-1">
        <div className="column-half">
          <img
            className="input-b-radius form-image"
            id="formImage"
            src={placeHolder}
            alt="image of entry image"
          />
        </div>
        <div className="column-half">
          <label className="margin-bottom-1 d-block" htmlFor="title">
            Title
          </label>
          <input
            required
            className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
            type="text"
            id="formTitle"
            name="formTitle"
            value={title}
            onChange={onTitleChange}
          />
          <label className="margin-bottom-1 d-block" htmlFor="photoUrl">
            Photo URL
          </label>
          <input
            required
            className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
            type="text"
            id="formURL"
            name="formURL"
            value={url}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="row margin-bottom-1">
        <div className="column-full">
          <label className="margin-bottom-1 d-block" htmlFor="formNotes">
            Notes
          </label>
          <textarea
            required
            className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
            name="formNotes"
            id="formNotes"
            cols={30}
            rows={10}
            defaultValue={note}
            onChange={onNotesChange}></textarea>
        </div>
      </div>
      <div className="row">
        <div className="column-full d-flex justify-between">
          <button
            className="invisible delete-entry-button"
            type="button"
            id="deleteEntry">
            Delete Entry
          </button>
          <button
            type="submit"
            className="input-b-radius text-padding purple-background white-text"
            onSubmit={onSubmit}>
            SAVE
          </button>
        </div>
      </div>
    </form>
  );
}
