import colors from '../../theme/colors.js';

function ColorCard({ color }) {
  console.log(`Render color ${color}`, colors[color]);

  return (
    <div
      className={`color-card bg-${colors[color].id} bg-${colors[color].id}-500`}
    >
      <label className="">{colors[color].name}</label>
      <dl className="color-detail hidden">
        {/* Name */}
        <dt>Name:</dt>
        <dd>{colors.blue.name}</dd>

        {/* hex */}
        <dt>HEX:</dt>
        <dd>{colors.blue.hex['500']}</dd>

        {/* HSL */}
        <dt>HSL:</dt>
        <dd>{colors.blue.hsl.join(', ')}</dd>

        {/* RBG */}
        <dt>RBG:</dt>
        <dd>{colors.blue.rgb.join(', ')}</dd>
      </dl>
    </div>
  );
}

export default ColorCard;
