export default function FilterButtons({
  FilterButton,
  setFilterButton,
  onClearItems,
}) {
  return (
    <div className="border rounded p-3 mb-3 d-flex justify-content-between">
      <div>
        <button
          item-filter="all"
          className={`btn me-1 ${
            FilterButton === "all" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setFilterButton("all")}
        >
          All
        </button>
        <button
          item-filter="incomplete"
          className={`btn me-1 ${
            FilterButton === "incomplete" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setFilterButton("incomplete")}
        >
          Incomplete
        </button>
        <button
          item-filter="completed"
          className={`btn me-1 ${
            FilterButton === "completed" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setFilterButton("completed")}
        >
          Completed
        </button>
      </div>
      <button className="btn btn-danger clear" onClick={onClearItems}>
        Clear
      </button>
    </div>
  );
}
