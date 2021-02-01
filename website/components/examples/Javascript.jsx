import Highlight from '../Highlight';

export default function Hero() {
  const code = `

    import {
      TelescopeArray,
      Telescope,
      parseActivity,
      aim
    } from '@telescope/core';

    function Observe({ Component, pageProps }) {

      function listen({
        // Frequency in MHz
        frequency = 1000
      }) {
        const activity = parseActivity(
          selectedTelescope,
          ascension
        )
        console.log(
          'New activited recorded',
          activity
        );
      }

      return (
        <TelescopeArray>

          <Telescope
            ascension={100}
            onChange={setAscension}
            onActivity={listen} />

          <Telescope
            ascension={110}
            onChange={setAscension}
            onActivity={listen} />

        </TelescopeArray>
      )
    }

    export default Observe

  `;
  return (
    <div className="code-sample">
      <Highlight language="javascript" content={code} header="JavaScript" />
    </div>
  );
}
