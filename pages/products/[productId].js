import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Products({ productId, title }) {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <title>{title} - My page</title>
        <meta name="description" content={`Learn more about ${title}`} />
        <meta property="og:title" content={`${title} - My page`} />
        <meta property="og:description" content={`Learn more about ${title}`} />
        <meta
          property="og:url"
          content={`http://localhost:3000/products/${productId}`}
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <h1 className="titile">{title}</h1>
        <p>Product ID: {productId}</p>
        <div className="product-links">
          {[...new Array(5)].map((i, index) => (
            <>
              {router.asPath !== `/products/${index + 1}` ? (
                <Link href={`/products/${index + 1}`}>
                  <a>Product {index + 1}</a>
                </Link>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  return {
    props: {
      productId: params.productId,
      title: `Product ${params.productId}`,
    },
  };
}

export async function getStaticPaths() {
  const paths = [...new Array(5)].map((i, index) => {
    return {
      params: {
        productId: `${index + 1}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
