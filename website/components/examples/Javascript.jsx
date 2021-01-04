import Highlight from '../Highlight';

export default function Hero() {
  const code = `

    import TelescopeArray, Telescope, { parseActivity, aim } from '@telescope/core';
    
    function Observe({ Component, pageProps }) {

      function listen({
        frequency = 1000 // Frequency in MHz
      }) {
        const activity = parseActivity(selectedTelescope, ascension)
        console.log('New activited recorded', activity);
      }

      return (
        <TelescopeArray>
          <Telescope ascension={100} onChange={setAscension} onActivity={listen} />
          <Telescope ascension={110} onChange={setAscension} onActivity={listen} />
          <Telescope ascension={120} onChange={setAscension} onActivity={listen} />
          <Telescope ascension={130} onChange={setAscension} onActivity={listen} />
          <Telescope ascension={140} onChange={setAscension} onActivity={listen} />
          <Telescope ascension={150} onChange={setAscension} onActivity={listen} />
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
