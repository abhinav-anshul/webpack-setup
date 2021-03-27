import "../styles/index.scss";
import Recipes from "./Recipes";
import "../images/2.gif";
import "../images/3.png";

function App() {
  return (
    <div>
      <section className='hero'>
        <main>
          <section>
            <h1>oh hai! Reactttt</h1>
          </section>
        </main>
        <Recipes />
      </section>
      <div className='section1'>yooo</div>
      <div className='section2'>hii there</div>
    </div>
  );
}

export default App;
