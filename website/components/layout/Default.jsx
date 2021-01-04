// import Navigation from '../global/Navigation';
import Footer from '../global/Footer';

function DefaultLayout(props) {
  return (
    <div className="page default-layout">
      <main className="page__middle">{props.children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
