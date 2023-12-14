import { useNavigate } from "react-router-dom";

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
  }
  

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
      image: "https://placekitten.com/350/250",
    },
    {
      id: 203,
      name: "Produkt 3",
      description: "Dłuższy opis produktu 3",
      price: "$59.99",
      image: "https://placekitten.com/350/250",
    },
    {
      id: 204,
      name: "Produkt 4",
      description: "Dłuższy opis produktu 4",
      price: "$29.99",
      image: "https://placekitten.com/350/250",
    },
    {
      id: 205,
      name: "Produkt 5",
      description: "Dłuższy opis produktu 5",
      price: "$69.99",
      image: "https://placekitten.com/350/250",
    },
    {
      id: 206,
      name: "Produkt 6",
      description: "Dłuższy opis produktu 6",
      price: "$49.99",
      image: "https://placekitten.com/350/250",
    },
  ];




export const Category = ():JSX.Element=>{
    console.log('dupa')
    const navigator = useNavigate();

    const navigateToProduct = (productId: number) => {
        navigator(`/product/${productId}`);
      };
    


    return  <div>
  
    <div style={styles.ourProducts}>
    <h2 style={styles.productsHeading}>Produkty z kategorii</h2>
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

      
  </div>

}



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
  