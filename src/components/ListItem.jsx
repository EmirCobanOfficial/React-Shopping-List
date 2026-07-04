import Item from "./Item";
import NoItem from "./NoItem";

export default function ListItem({
  items,
  onDeleteItem,
  onUpdateItem,
  FilterButton,
}) {
  const filteredItems = items.filter((item) => {
    if (FilterButton === "completed") return item.completed;
    if (FilterButton === "incomplete") return !item.completed;
    return true; // "all"
  });

  return (
    <ul className="shopping-list list-unstyled">
      {filteredItems.length > 0 ? (
        filteredItems.map((i) => (
          <Item
            urun={i}
            key={i.id}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        ))
      ) : (
        <NoItem />
      )}
    </ul>
  );
}
