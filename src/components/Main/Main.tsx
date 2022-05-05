import Tabs from '../Tabs';

function Main() {
  return (
    <main className="main">
      {/* ADD CLASS filters__active TOGGLE  */}
      <section className="filters container filters__active">
        <Tabs />
      </section>
    </main>
  );
}

export default Main;
