import Hero from '../components/hero/Hero.jsx';
import ColorList from '../components/colors/ColorList.jsx';
import HTML from '../components/examples/HTML.jsx';
import Javascript from '../components/examples/Javascript.jsx';

export default function Home() {
  return (
    <section id="home">
      <Hero />
      <ColorList />
      <div>
        <HTML />
        <Javascript />
      </div>
    </section>
  );
}
