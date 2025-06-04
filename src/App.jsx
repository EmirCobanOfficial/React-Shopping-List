import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import AddItemForm from "./components/AddItemForm";
import Header from "./components/Header";
import FilterButtons from "./components/FilterButtons";
import ListItem from "./components/ListItem";
import { useState } from "react";

const urunler = [
  { id: 1, name: "Yumurta", completed: true },
  { id: 2, name: "Peynir", completed: true },
  { id: 3, name: "Zeytin", completed: false },
  { id: 4, name: "Et", completed: false },
  { id: 5, name: "Tavuk", completed: true },
];

export default function App() {
  const [items, setItems] = useState(urunler);
  const [FilterButton, setFilterButton] = useState("all");

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((i) => i.id != id));
  }

  function handleUpdateItem(id) {
    const updatedItems = (items) =>
      items.map((item) =>
        item.id == id ? { ...item, completed: !item.completed } : item
      );
    setItems(updatedItems);
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="container">
      <Header />
      <AddItemForm onAddItem={handleAddItem} />

      {items.length > 0 && (
        <FilterButtons
          FilterButton={FilterButton}
          setFilterButton={setFilterButton}
          onClearItems={handleClearItems}
        />
      )}

      <ListItem
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        FilterButton={FilterButton}
      />
    </div>
  );
}
