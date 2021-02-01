import colors from '../../theme/colors.js';
import Clipboard from '../../helpers/clipboard';
import { FiCopy } from 'react-icons/fi';

function ColorCard({ color }) {
  const clipboard = new Clipboard();

  function copyText(text) {
    clipboard.copy(text);
  }

  function show(e) {
    e.target.classList.add('toggled');
  }

  function hide(e) {
    e.target.classList.remove('toggled');
  }

  return (
    <div className="color-card-wrapper" onMouseEnter={show} onMouseLeave={hide}>
      <div className={`color-card bg-${colors[color].id} bg-${colors[color].id}-500`}>
        {/* Name */}
        {/* <dt>Name:</dt> */}
        {/* <dd>{colors[color].name}</dd> */}

        <div>
          <label className="color-card--name">{colors[color].name}</label>
        </div>

        <div className={`color-card--detail`}>
          <table>
            <tbody>
              {/* Hex */}
              <tr>
                <td>
                  <label>HEX:</label>
                </td>
                <td>
                  <span>{colors[color].hex['500']}</span>
                </td>
                <td>
                  <span
                    className="copy-icon"
                    onClick={() => {
                      copyText(colors[color].hex['500']);
                    }}
                  >
                    <FiCopy />
                  </span>
                </td>
              </tr>

              {/* HSL */}
              <tr>
                <td>
                  <label>HSL:</label>
                </td>
                <td>
                  <span>{colors[color].hsl.join(', ')}</span>
                </td>
                <td>
                  <span
                    className="copy-icon"
                    onClick={() => {
                      copyText(colors[color].hsl.join(', '));
                    }}
                  >
                    <FiCopy />
                  </span>
                </td>
              </tr>

              {/* HSL */}
              <tr>
                <td>
                  <label>RBG:</label>
                </td>
                <td>
                  <span>{colors[color].rgb.join(', ')}</span>
                </td>
                <td>
                  <span
                    className="copy-icon"
                    onClick={() => {
                      copyText(colors[color].rgb.join(', '));
                    }}
                  >
                    <FiCopy />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ColorCard;
