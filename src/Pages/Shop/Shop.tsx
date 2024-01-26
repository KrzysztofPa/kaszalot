import {
    AddProduct,
    ListProductImage,
    ListProductItem,
    ListProductName,
    ListProductPrice,
    ProductList,
    ShopContent
} from "./Shop.style";
import {generatePath, useNavigate} from "react-router-dom";
import {Routing} from "../../services/Routing";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../../index";  
import { DefaultButton } from "../Global.style";

const shopFixtures:categoryItem[] = 
[
    {
        name: 'Karmy kocie',
        id: '1',
        url: 'https://picsum.photos/207',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim gravida condimentum. Fusce rutrum mi ac sodales faucibus. Maecenas tempor sagittis sodales. Cras ut aliquam elit. Donec imperdiet sapien vitae odio scelerisque convallis. Quisque et dignissim nisl, id luctus ligula. '
    },
{
    name: 'Karmy psie',
    id: '2',
    url: 'https://picsum.photos/209',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim gravida condimentum. Fusce rutrum mi ac sodales faucibus. Maecenas tempor sagittis sodales. Cras ut aliquam elit. Donec imperdiet sapien vitae odio scelerisque convallis. Quisque et dignissim nisl, id luctus ligula. '
},
{
    name: 'Zabawki',
    id: '3',
    url: 'https://picsum.photos/210',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim gravida condimentum. Fusce rutrum mi ac sodales faucibus. Maecenas tempor sagittis sodales. Cras ut aliquam elit. Donec imperdiet sapien vitae odio scelerisque convallis. Quisque et dignissim nisl, id luctus ligula. '
},
{
    name: 'Klatki dla gekonów',
    id: '4',
    url: 'https://picsum.photos/20123',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim gravida condimentum. Fusce rutrum mi ac sodales faucibus. Maecenas tempor sagittis sodales. Cras ut aliquam elit. Donec imperdiet sapien vitae odio scelerisque convallis. Quisque et dignissim nisl, id luctus ligula. '
},
]


export interface categoryItem {
    name: string,
    description: string,
    id: string,
    url: string
}




export const Shop = (): JSX.Element => {
    const navigator = useNavigate();

    const [categoryList, setCategoryList] = useState<categoryItem[]>( []);

    useEffect(()=>{
setTimeout(() => { 
    setCategoryList(shopFixtures)
}, 100)
    },[])


    const navigateToCategory = (categoryId: string) => {
        navigator(`/category/${categoryId}`);
      };


    return <ShopContent>
        <div style={{margin: '0 10rem'}}>
        {categoryList.map((category) => (
            <div key={category.id} style={styles.articlePresentation} onClick={() => navigateToCategory(category.id)}>
              <img src={category.url} style={styles.articleImagePresentation} />
              <div style={styles.articleInfo}>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <DefaultButton>Przejdź do kategorii</DefaultButton>
              </div>
            </div>
          ))}

        </div>
    </ShopContent>
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
      margin: "10px"
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
  