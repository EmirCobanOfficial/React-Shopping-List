import Item from "./Item";
import NoItem from "./NoItem";

export default function ListItem({ urunler }) {
  return (
    <ul className="shopping-list list-unstyled">
      {urunler.length > 0 ? (
        urunler.map((i, index) => <Item urun={i} key={index} />)
      ) : (
        <NoItem />
      )}
    </ul>
  );
}
