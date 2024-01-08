interface EntryListProps {
  onClick: () => void;
}

export default function EntryList({ onClick }: EntryListProps) {
  return (
    <>
      <div className="container" data-view="entries">
        <EntriesTextAndButton onClick={onClick} />
        <ListOfEntries />
      </div>
    </>
  );
}

interface EntriesTextAndButtonProps {
  onClick: () => void;
}

function EntriesTextAndButton({ onClick }: EntriesTextAndButtonProps) {
  return (
    <div className="row">
      <div className="column-full d-flex justify-between align-center">
        <h1>Entries</h1>
        <h3 onClick={onClick}>
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
