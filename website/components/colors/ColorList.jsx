import ColorCard from './ColorCard';

function ColorList() {
  return (
    <div className="container">
      <h2>Colors</h2>
      <section className="color-list">
        <ColorCard color="black" />
        <ColorCard color="white" />
        <ColorCard color="gray" />
        <ColorCard color="blue" />
        <ColorCard color="purple" />
        <ColorCard color="pink" />
        <ColorCard color="red" />
        <ColorCard color="orange" />
        <ColorCard color="yellow" />
        <ColorCard color="green" />
      </section>
    </div>
  );
}

export default ColorList;
