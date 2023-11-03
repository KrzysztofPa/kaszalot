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


interface productItem {
    name: string,
    id: string,
    price: number
    url: string
}


export const Shop = (): JSX.Element => {


    const [productList, setProductList] = useState<productItem[]>( []);

    useEffect(()=>{
        axios.get(`${baseUrl}/beds`)
            .then((res: AxiosResponse<productItem[]>)=>{
                console.log(res.data);
                setProductList(res.data);
            })
    },[])


    const navigator = useNavigate()

    return <ShopContent>
        <div>
            <AddProduct onClick={() => navigator(generatePath(Routing.add))}>Dodaj produkt </AddProduct>
        <ProductList>
            {productList.map((productItem) => (
                <ListProductItem key={productItem.id} onClick={() => navigator(generatePath(Routing.product, {product: productItem.id}))}>
                    <ListProductImage src={productItem.url}/>
                    <ListProductName> {productItem.name}</ListProductName>
                    <ListProductPrice>{productItem.price} PLN</ListProductPrice>
                </ListProductItem>
            ))}

        </ProductList>

        </div>
    </ShopContent>
}
