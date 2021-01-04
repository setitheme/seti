import Highlight from '../Highlight';

export default function Hero() {
  const code = `
    html {
      background: #0e1112 url('/bg-compressed.png');
      color: #d4d7d6;
      font-family: 'Rubik', sans-serif;
      font-size: 16px;
    }
    body {
      font-size: 1rem;
    }
  `;
  return (
    <div className="code-sample">
      <Highlight language="css" content={code} header="CSS" />
    </div>
  );
}
