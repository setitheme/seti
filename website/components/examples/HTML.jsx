import Highlight from '../Highlight';

export default function HTML() {
  const code = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Jade</title>
        <script type="text/javascript">
          var foo = false;
          if (foo) {
            var bar = 6;
            return bar;
          }
        </script>
      </head>
      <body>
        <h1>Jade - node template engine</h1>
        <div id="container" class="col">
          <p>You are amazing</p>
          <p>
            Jade is a terse and simple
            templating language with a
            strong focus on performance
            and powerful features.
          </p>
        </div>
      </body>
    </html>
  `;
  return (
    <div className="code-sample">
      <Highlight language="html" content={code} header="HTML" />
    </div>
  );
}
