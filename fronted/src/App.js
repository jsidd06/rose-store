import Product from "./components/Product";
import data from "./data";

function App() {
  return (
    <div class="grid-container">
      <header class="row">
        <div>
          <a class="brand" href="index.html">
            Rose Store
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div class="row center">
          {data.products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </main>
      <footer class="row center">All right reserved</footer>
    </div>
  );
}

export default App;
