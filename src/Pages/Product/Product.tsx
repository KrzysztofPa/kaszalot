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

    const [productData, setProductData] = useState<ProductData>( {id: '', url: '', name: '', description: '', price: 0});

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
                    <BuyButton>ZAMÓW TERAZ </BuyButton>
                    <DeleteButton onClick={deleteProduct}>USUŃ PRODUKT </DeleteButton>
                </ProductRight>
            </ProductContent>
        </Content>

    </>
}
