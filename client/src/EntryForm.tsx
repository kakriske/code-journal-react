import placeHolderImage from './placeholder-image-square.jpg';

export default function EntryForm() {
  return (
    <>
      <Header />
      <div className="container" data-view="entry-form">
        <NewEntryText />
        <Form />
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

function Header() {
  return (
    <header className="header purple-background">
      <div className="container">
        <div className="row">
          <div className="column-full d-flex align-center">
            <h1 className="white-text">Code Journal</h1>
            <h3>
              <a id="entriesLink" className="entries-link white-text" href="#">
                Entries
              </a>
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
}

function Form() {
  return (
    <form id="entryForm">
      <div className="row margin-bottom-1">
        <div className="column-half">
          <img
            className="input-b-radius form-image"
            id="formImage"
            src={placeHolderImage}
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
