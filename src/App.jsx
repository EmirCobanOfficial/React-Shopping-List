import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import AddItemForm from "./components/AddItemForm";
import Header from "./components/Header";
import NoItem from "./components/NoItem";
import FilterButtons from "./components/FilterButtons";
import ListItem from "./components/ListItem";
import ClearButton from "./components/ClearButton";

export default function App() {
  return (
    <div className="container">
      <Header />

      <AddItemForm />

      <NoItem />

      <FilterButtons />

      <ListItem />

      <ClearButton />
    </div>
  );
}
