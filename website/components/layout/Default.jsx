import Hero from '../hero/Hero.jsx';
import Footer from '../global/Footer';

function DefaultLayout(props) {
  return (
    <div className="page default-layout">
      <Hero />
      <main className="page__middle">{props.children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
