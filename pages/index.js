import Head from "next/head";
import Link from "next/link";

function HomePage() {
  return (
    <div className="center-text">
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Hello world</p>
      <div className="product-links">
        {[...new Array(5)].map((i, index) => (
          <Link href={`/products/${index + 1}`}>
            <a>Product {index + 1}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
