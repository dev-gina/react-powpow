import React from 'react';
import S from "./style";
import FlushieColor from './flushies/FlushieColor';
import FlushieBest from './flushies/FlushieBest';
import FlushieSpecial from './flushies/FlushieSpecial';
import FlushieRecommend from './flushies/FlushieRecommend';

// 더미데이터 확인용

const productList = [
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 11_900,
        src : "/assets/images/store/dental-dog.png"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 5_900,
        src : "/assets/images/store/dental-dog.png"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 6_500,
        src : "/assets/images/store/dental-dog.png"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 4_000,
        src : "/assets/images/store/dental-dog.png"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 12_900,
        src : "/assets/images/store/dental-dog.png"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 14_000,
        src : "/assets/images/store/dental-dog.png"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 7_900,
        src : "/assets/images/store/dental-dog.png"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 8_000,
        src : "/assets/images/store/dental-dog.png"
    },
]


const Flushies = () => {

    const bestProducts = productList.map(({productName, productPrice, src}, i) => (
        <S.BestProduct key={i} >
            <img src={src} alt={"상품" + (i + 1)} />
            <span>{productName}</span>
            <span style={{ fontWeight: 700 }}>{productPrice}</span>
            <button>담기</button>
        </S.BestProduct>
    ))

    const specialProducts = productList.map(({productName, productPrice, src}, i) => (
        <S.SpecialProduct key={i}>
            <img src={src} alt={"상품" + (i + 1)}/>
            <span>{productName}</span>
            <span style={{ fontWeight: 700 }}>{productPrice}</span>
            <button>담기</button>
        </S.SpecialProduct >
    ))

    const recommendProducts = productList.map(({productName, productPrice, src}, i) => (
        <S.Product key={i} >
            <img src={src} alt={"상품" + (i + 1)} />
            <span>{productName}</span>
            <span style={{ fontWeight: 700 }}>{productPrice}</span>
            <button>담기</button>
        </S.Product>
    ))

    return (
        <div>
            <S.Content>
                {/* 컬러 추천 상품 */}
                <FlushieColor productList={productList} />

                {/* 베스트상품 */}
                <FlushieBest bestProducts={bestProducts} />
                
                {/* 스페셜 상품 */}
                <FlushieSpecial specialProducts={specialProducts}/>

                {/* 강아지 추천 상품 */}
                <FlushieRecommend recommendProducts={recommendProducts} />

            </S.Content>
        </div>
    );
};

export default Flushies;
