import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import AddItemForm from "./components/AddItemForm";
import Header from "./components/Header";
import FilterButtons from "./components/FilterButtons";
import ListItem from "./components/ListItem";
import ClearButton from "./components/ClearButton";
import Item from "./components/Item";

const urunler = [
  { id: 1, name: "Yumurta", completed: true },
  { id: 2, name: "Peynir", completed: true },
  { id: 3, name: "Zeytin", completed: false },
  { id: 4, name: "Et", completed: true },
  { id: 5, name: "Tavuk", completed: true },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <AddItemForm />
      <FilterButtons />
      <ListItem urunler={urunler} />
      <ClearButton />
    </div>
  );
}
