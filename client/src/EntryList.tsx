export default function EntryList() {
  return (
    <>
      <div className="container" data-view="entries">
        <EntriesTextAndButton />
        <ListOfEntries />
      </div>
    </>
  );
}

function EntriesTextAndButton() {
  return (
    <div className="row">
      <div className="column-full d-flex justify-between align-center">
        <h1>Entries</h1>
        <h3>
          <a id="formLink" className="white-text form-link" href="#">
            NEW
          </a>
        </h3>
      </div>
    </div>
  );
}

function ListOfEntries() {
  return (
    <div className="row">
      <div className="column-full">
        <ul className="entry-ul" id="entryUl"></ul>
      </div>
    </div>
  );
}
