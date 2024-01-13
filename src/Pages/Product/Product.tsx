import {
    BuyButton,
    DeleteButton,
    ProductContent,
    ProductDescription,
    ProductImage,
    ProductLeft,
    ProductName,
    ProductPrice,
    ProductRight
} from "./Product.style";
import {Content} from "../Global.style";
import axios, {AxiosResponse} from "axios";
import {generatePath, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {baseUrl} from "../../index";
import {Routing} from "../../services/Routing";


interface ProductData {
    id: string,
    name: string,
    url: string,
    description: string,
    price: number
}

export const Product = (): JSX.Element => {

    const params = useParams();
    const navigator = useNavigate()

    const [productData, setProductData] = useState<ProductData>( {id: 'params.product', url: 'https://placekitten.com/351/251', name: 'Produkt', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum, augue ac mollis ultricies, metus lacus facilisis libero, vitae pretium ligula neque a sapien. Fusce molestie ornare leo nec gravida. Nullam nibh lacus, faucibus a ullamcorper sed, lacinia eget enim. Cras id rhoncus ex. Morbi eget eleifend turpis, porttitor finibus mi. Suspendisse ac ornare mauris. Sed ut imperdiet massa, in posuere odio. Vivamus fermentum lorem tempor sem scelerisque dictum. Integer semper tortor lacinia enim rutrum convallis. ', price: 100});

    useEffect(()=>{
        axios.get(`${baseUrl}/bed/${params.product}`)
            .then((res: AxiosResponse<ProductData>)=>{
                setProductData(res.data);
            })
    },[params])


    const deleteProduct = () =>{
        axios.delete(`${baseUrl}/bed/${params.product}`)
            .then((res: AxiosResponse<ProductData>)=>{
                navigator(Routing.shop)
            })
    }

if(productData === undefined){
    return <></>
}

    return <>
        <Content>
            <ProductContent>
                <ProductLeft>
                    <ProductImage src={productData.url}/>
                </ProductLeft>
                <ProductRight>
                    <ProductName>{productData.name}</ProductName>
                    <ProductPrice> <strong>{productData.price}</strong> PLN/szt</ProductPrice>
                    <ProductDescription>{productData.description}</ProductDescription>
                    <BuyButton>Dodaj do koszyka </BuyButton>
                </ProductRight>
            </ProductContent>
        </Content>

    </>
}
