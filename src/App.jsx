import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import AddItemForm from "./components/AddItemForm";
import Header from "./components/Header";
import FilterButtons from "./components/FilterButtons";
import ListItem from "./components/ListItem";
import ClearButton from "./components/ClearButton";
import Item from "./components/Item";
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

  return (
    <div className="container">
      <Header />
      <AddItemForm onAddItem={handleAddItem} />
      <FilterButtons />
      <ListItem
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />
      <ClearButton />
    </div>
  );
}
