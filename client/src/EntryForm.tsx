import { ChangeEvent } from 'react';

interface EntryFormProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  url: string;
  placeHolder: string;
}

export default function EntryForm({
  onChange,
  url,
  placeHolder,
}: EntryFormProps) {
  return (
    <>
      <div className="container" data-view="entry-form">
        <NewEntryText />
        <Form onChange={onChange} url={url} placeHolder={placeHolder} />
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
}

function Form({ onChange, url, placeHolder }: FormProps) {
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
          />
          <label className="margin-bottom-1 d-block" htmlFor="photoUrk">
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
            rows={10}></textarea>
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
          <button className="input-b-radius text-padding purple-background white-text">
            SAVE
          </button>
        </div>
      </div>
    </form>
  );
}
