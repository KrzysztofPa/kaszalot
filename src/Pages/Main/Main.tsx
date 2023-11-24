import React from "react";
import { useNavigate } from "react-router-dom";
import kaszalot from '../../img/image 1.png'

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const Main = (): JSX.Element => {
  const navigator = useNavigate();

  const ourProducts: Product[] = [
    {
      id: 201,
      name: "Produkt 1",
      description: "Dłuższy opis produktu 1",
      price: "$49.99",
      image: "https://placekitten.com/350/250",
    },
    {
      id: 202,
      name: "Produkt 2",
      description: "Dłuższy opis produktu 2",
      price: "$39.99",
      image: "https://placekitten.com/351/251",
    },
    {
      id: 203,
      name: "Produkt 3",
      description: "Dłuższy opis produktu 3",
      price: "$59.99",
      image: "https://placekitten.com/352/252",
    },
    {
      id: 204,
      name: "Produkt 4",
      description: "Dłuższy opis produktu 4",
      price: "$29.99",
      image: "https://placekitten.com/353/253",
    },
    {
      id: 205,
      name: "Produkt 5",
      description: "Dłuższy opis produktu 5",
      price: "$69.99",
      image: "https://placekitten.com/354/254",
    },
    {
      id: 206,
      name: "Produkt 6",
      description: "Dłuższy opis produktu 6",
      price: "$49.99",
      image: "https://placekitten.com/355/255",
    },
  ];

  const articles: Article[] = [
    {
      id: 301,
      title: "Artykuł 1",
      description: "Opis artykułu 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://placekitten.com/200/200",
    },
    {
      id: 302,
      title: "Artykuł 2",
      description: "Opis artykułu 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://placekitten.com/200/200",
    },
    {
      id: 303,
      title: "Artykuł 3",
      description: "Opis artykułu 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "https://placekitten.com/200/200",
    },
  ];

  const navigateToProduct = (productId: number) => {
    navigator(`/product/${productId}`);
  };

  const navigateToArticle = (articleId: number) => {
    navigator(`/article/${articleId}`);
  };

  return (
    <>
      <div style={styles.mainSection}>
        <div style={styles.mainText}>
          <h2>Witaj w Kaszalocie, Twoim sklepie zoologicznym</h2>
          <p>Witaj w Kaszalocie, Twoim rajskim sklepie zoologicznym! Oferujemy szeroki wybór produktów dla Twojego ulubieńca, począwszy od pysznego jedzenia, przez wygodne legowiska, aż po atrakcyjne zabawki. Zadbaj o zdrowie i szczęście swojego zwierzaka z nami!</p>
        </div>
        <img src={kaszalot} alt="Main Section Image" style={styles.mainImage} />
      </div>

      <div style={styles.ourProducts}>
        <h2 style={styles.productsHeading}>Nasze Produkty</h2>
        <div style={styles.productContainer}>
          {ourProducts.map((product) => (
            <div key={product.id} style={styles.product} onClick={() => navigateToProduct(product.id)}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <div style={styles.productInfo}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.articlesSection}>
        <h2>Artykuły</h2>
        <div style={styles.articleContainer}>
          {articles.map((article) => (
            <div key={article.id} style={styles.articlePresentation} onClick={() => navigateToArticle(article.id)}>
              <img src={article.image} alt={article.title} style={styles.articleImagePresentation} />
              <div style={styles.articleInfo}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <button>Przejdź do artykułu</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  banner: {
    backgroundColor: "#3498db",
    color: "#fff",
    textAlign: "center",
    padding: "50px 20px",
  },
  companyName: {
    fontSize: "2em",
    margin: "0",
  },
  companyDescription: {
    fontSize: "1.2em",
  },
  mainSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    maxWidth: "1400px",
    margin: 'auto'
  },
  mainText: {
    flex: "1",
    textAlign: "left",
    padding: "20px",
  },
  mainImage: {
    flex: "1",
    maxWidth: "100%",
    borderRadius: "8px",
  },
  ourProducts: {
    padding: "20px",
  },
  productsHeading: {
    textAlign: "center",
  },
  productContainer: {
    maxWidth: 950,
    margin: 'auto',
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    justifyContent: "center",
  },
  product: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  productImage: {
    maxWidth: "100%",
    borderRadius: "8px",
  },
  productInfo: {
    textAlign: "center",
    marginTop: "10px",
  },
  articlesSection: {
    padding: "20px",
    textAlign: "center",
  },
  articleContainer: {
    maxWidth: 950,
    margin: 'auto',
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
    justifyContent: "center",
  },
  articlePresentation: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
    justifyContent: "space-around",
  },
  articleImagePresentation: {
    width: "200px",
    height: "200px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  articleInfo: {
    textAlign: "center",
  },
};
