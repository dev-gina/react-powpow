import React from 'react';
import S from './style';

const ProductDetail = () => {
    return (
        <div>
            {/*<div className="body-container">*/}
            {/*    <form action="../order/order-buyerlist.order">*/}
            {/*        <div className="body-wrap">*/}
            {/*            <div className="product-info-left">*/}
            {/*                <img id=main-img src="/powpow/assets/images/product/${product.productImage}"/>*/}
            {/*                <div className="sub-img-wrap">*/}
            {/*                    <img src="/powpow/assets/images/product/${product.productSubImage1}"/>*/}
            {/*                    <img src="/powpow/assets/images/product/${product.productSubImage2}"/>*/}
            {/*                    <img src="/powpow/assets/images/product/${product.productSubImage3}"/>*/}
            {/*                </div>*/}
            {/*                <div className="info-seller">*/}
            {/*                    <p className="h6">상품코드 : 51563545 | 원산지 : 상품설명 참조</p>*/}
            {/*                    <button>포포></button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="product-info-right">*/}
            {/*                <p id="star">☆☆☆☆☆ | 301 + ></p>*/}
            {/*                <div className="icons-wrap">*/}
            {/*                    <img src="./images/heart2.png"/>*/}
            {/*                    <img src="./images/share.png"/>*/}
            {/*                </div>*/}
            {/*                <p className="product-name h2">오쥬 바이 로우즈 독 치킨가슴살&amp;호박 파우치 강아지 간식,69g (유통기한*/}
            {/*                    2025-02-25까지)</p>*/}
            {/*                <p className="coupon h3">쿠폰 적용가</p>*/}
            {/*                <div className="product-price-wrap">*/}
            {/*                    <p className="percent h2">10%</p> <p className="real-price h2">4,050원</p> <p*/}
            {/*                    className="price h4 gray500">4500원</p>*/}
            {/*                </div>*/}
            {/*                <div className="price-check">*/}
            {/*                    <div className="tag-wrap">*/}
            {/*                        <p className="tag1 h5">배송정보</p>*/}
            {/*                        <p className="tag2 h5">결제혜택</p>*/}
            {/*                        <p className="tag3 h5">카드혜택</p>*/}
            {/*                    </div>*/}
            {/*                    <div className="info-wrap">*/}
            {/*                        <div className="delivery-info">*/}
            {/*                            <p>cj대한통운</p>*/}
            {/*                            <p>2500원 (30,000원 이상 무료)</p>*/}
            {/*                            <p>10/01(화) 도착예정</p>*/}
            {/*                        </div>*/}
            {/*                        <div className="sector"></div>*/}
            {/*                        <div className="info-middle h6">*/}
            {/*                            <p>토스페이 3만원 이상 결제 시 최대 2만원 즉시할인</p>*/}
            {/*                            <p>네이버페이 2,000원 포인트 적립</p>*/}
            {/*                        </div>*/}
            {/*                        <p>무이자 할부 안내</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="product-box">*/}
            {/*                    <p className="h4">오쥬 바이 로우즈 독 치킨가슴살&amp;호박 파우치 강아지 간식,69g (유통기한 2025-02-25까지)</p>*/}
            {/*                    <div className="box-bottom">*/}
            {/*                        <div className="quantity-control">*/}
            {/*                            <span><button type="button" className="btn-minus">-</button></span>*/}
            {/*                            <input type="hidden" value="${product.id}" name="productId"/>*/}
            {/*                            <input id="result1" value="1" name="quantity" className="quantity-input"/>*/}
            {/*                            <span><button type="button" className="btn-plus">+</button></span>*/}
            {/*                        </div>*/}
            {/*                        <p className="h6 gray500">남은 수량:32개</p> <p className="h4">4,050원</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="button-container h5">*/}
            {/*                    <button type="button" className="check-button">장바구니</button>*/}
            {/*                    <button className="payment-button">바로구매</button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </form>*/}
            {/*    <p className="together h4">함께보면 좋은 상품</p>*/}
            {/*    <div className="button-wrap">*/}
            {/*        <p>1/2</p>*/}
            {/*        <button>&lt;</button>*/}
            {/*        <button> &gt;</button>*/}
            {/*    </div>*/}
            {/*    <div className="product-wrap">*/}

            {/*        <div className="product">*/}
            {/*            <div className="product-image-wrap">*/}
            {/*                <img src="./images/not-found.png"/>*/}
            {/*                <div className="hover-box">*/}
            {/*                    <div className=hover-box-new>*/}
            {/*                        <a className="hover-new" href="#">*/}
            {/*                            <img src="./images/new.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className=hover-box-cart>*/}
            {/*                        <a className="hover-cart" href="#">*/}
            {/*                            <img src="./images/cart.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className=hover-box-heart>*/}
            {/*                        <a className="hover-heart" href="#">*/}
            {/*                            <img src="./images/heart.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="product-info">*/}
            {/*                <p id="product-name">아카나 독 레시피, 2kg</p>*/}
            {/*                <p id="product-price">25,200원</p>*/}
            {/*                <div className="product-star">*/}
            {/*                    <p id="product-star">★★★★★</p><p id="product-star-count">(25)</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="product">*/}
            {/*            <div className="product-image-wrap">*/}
            {/*                <img src="./images/not-found.png"/>*/}
            {/*                <div className="hover-box">*/}
            {/*                    <div className=hover-box-new>*/}
            {/*                        <a className="hover-new" href="#">*/}
            {/*                            <img src="./images/new.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className=hover-box-cart>*/}
            {/*                        <a className="hover-cart" href="#">*/}
            {/*                            <img src="./images/cart.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className=hover-box-heart>*/}
            {/*                        <a className="hover-heart" href="#">*/}
            {/*                            <img src="./images/heart.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="product-info">*/}
            {/*                <p id="product-name">아카나 독 레시피, 2kg</p>*/}
            {/*                <p id="product-price">25,200원</p>*/}
            {/*                <div className="product-star">*/}
            {/*                    <p id="product-star">★★★★★</p><p id="product-star-count">(25)</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="product">*/}
            {/*            <div className="product-image-wrap">*/}
            {/*                <img src="./images/not-found.png"/>*/}
            {/*                <div className="hover-box">*/}
            {/*                    <div className=hover-box-new>*/}
            {/*                        <a className="hover-new" href="#">*/}
            {/*                            <img src="./images/new.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className=hover-box-cart>*/}
            {/*                        <a className="hover-cart" href="#">*/}
            {/*                            <img src="./images/cart.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className=hover-box-heart>*/}
            {/*                        <a className="hover-heart" href="#">*/}
            {/*                            <img src="./images/heart.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="product-info">*/}
            {/*                <p id="product-name">아카나 독 레시피, 2kg</p>*/}
            {/*                <p id="product-price">25,200원</p>*/}
            {/*                <div className="product-star">*/}
            {/*                    <p id="product-star">★★★★★</p><p id="product-star-count">(25)</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="product">*/}
            {/*            <div className="product-image-wrap">*/}
            {/*                <img src="./images/not-found.png"/>*/}
            {/*                <div className="hover-box">*/}
            {/*                    <div className=hover-box-new>*/}
            {/*                        <a className="hover-new" href="#">*/}
            {/*                            <img src="./images/new.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className=hover-box-cart>*/}
            {/*                        <a className="hover-cart" href="#">*/}
            {/*                            <img src="./images/cart.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className=hover-box-heart>*/}
            {/*                        <a className="hover-heart" href="#">*/}
            {/*                            <img src="./images/heart.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="product-info">*/}
            {/*                <p id="product-name">아카나 독 레시피, 2kg</p>*/}
            {/*                <p id="product-price">25,200원</p>*/}
            {/*                <div className="product-star">*/}
            {/*                    <p id="product-star">★★★★★</p><p id="product-star-count">(25)</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="container3">*/}
            {/*        <div className="info-wrap">*/}
            {/*            <div className="tab-wrap">*/}
            {/*                <a className="info-btn" href="javascript:showInfo()">상품정보</a>*/}
            {/*                <a className="review-btn" href="javascript:showReveiw()">상품평</a>*/}
            {/*                <a className="delivery-btn" href="javascript:showDelivery()">주문/배송안내</a>*/}
            {/*                <a calss="change-btn" href="javascript:showChange()">교환/반품안내</a>*/}
            {/*            </div>*/}
            {/*            <div className="container btn1">*/}
            {/*                <table className="product-info2">*/}
            {/*                    <tr>*/}
            {/*                        <th colSpan="2">필수 표기정보</th>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>제품명</td>*/}
            {/*                        <td>컨텐츠참조</td>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>생산자 및 소재지</td>*/}
            {/*                        <td>컨텐츠참조</td>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>포장단위별 내용물의 용량(중량), 수량</td>*/}
            {/*                        <td>210g X 24개</td>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>영양성분</td>*/}
            {/*                        <td>컨텐츠참조</td>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>소비자 안전을 위한 주의사항</td>*/}
            {/*                        <td>컨텐츠참조</td>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>유전자변형식품에 해당하는 경우의 표시</td>*/}
            {/*                        <td>해당없음</td>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>수입식품 문구</td>*/}
            {/*                        <td>해당없음</td>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>소비자상담 관련 전화번호</td>*/}
            {/*                        <td>루쏘고객센터 1577-7011</td>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>제조연월일, 소비기한 또는 품질유지기한</td>*/}
            {/*                        <td>소비기한 : 2025년 01월 21일 이거나 그 이후인 상품</td>*/}
            {/*                    </tr>*/}
            {/*                </table>*/}
            {/*            </div>*/}
            {/*            <div className="notice-wrap review-wrap btn2">*/}
            {/*                <div className="reveiw-title">*/}
            {/*                    <p>전체 상품평(301건)</p> <p id="product-star">★★★★★5/5</p>*/}
            {/*                </div>*/}
            {/*                <div className="sector"></div>*/}
            {/*                <div className="product-detail">*/}
            {/*                    <div className="user-info-wrap">*/}
            {/*                        <div className="user-info">*/}
            {/*                            <p id="product-star">★★★★★</p> <p>ita******</p>*/}
            {/*                        </div>*/}
            {/*                        <img src="./images/not-found.png"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="product-review">*/}
            {/*                        <p className="p1">오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 69g</p>*/}
            {/*                        <p className="p2">2024-09-28 작성</p>*/}
            {/*                        <p className="p3">1+1이라 다이어트용으로 10개 주문햇어요.원플원이라 20개 잘받앗네요.개당 가격은 비싸지만 원플원이라 그나마*/}
            {/*                            괞네요.맛잇다고해서 한달 먹을꺼주문햇네요.유통기한은 10월24일까지라 3주 입니다.원플원이라 딱 10개 주문하면 무료배송에 20개 와서 하루에*/}
            {/*                            하나씩 먹으면 유통기한 전까지 먹을수 잇어요.다이어트용으로 좋아요.그리고 냉장보관 입니다.냉동보관이 아닙니다.냉동보관시 식감이 떨어질수*/}
            {/*                            잇어요.진공포장이라 김치냉장고에 보관하면 좀더 오래먹을수 잇을꺼 같아요.먹어보고 맛잇으면 또 주문할께요.전자렌지나 에어프라이어에 짧은시간에*/}
            {/*                            돌려서 먹을수 잇으니 간편합니다. </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="sector"></div>*/}
            {/*                <div className="product-detail">*/}
            {/*                    <div className="user-info-wrap">*/}
            {/*                        <div className="user-info">*/}
            {/*                            <p id="product-star">★★★★★</p> <p>ita******</p>*/}
            {/*                        </div>*/}
            {/*                        <img src="./images/not-found.png"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="product-review">*/}
            {/*                        <p className="p1">오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 69g</p>*/}
            {/*                        <p className="p2">2024-09-28 작성</p>*/}
            {/*                        <p className="p3">1+1이라 다이어트용으로 10개 주문햇어요.원플원이라 20개 잘받앗네요.개당 가격은 비싸지만 원플원이라 그나마*/}
            {/*                            괞네요.맛잇다고해서 한달 먹을꺼주문햇네요.유통기한은 10월24일까지라 3주 입니다.원플원이라 딱 10개 주문하면 무료배송에 20개 와서 하루에*/}
            {/*                            하나씩 먹으면 유통기한 전까지 먹을수 잇어요.다이어트용으로 좋아요.그리고 냉장보관 입니다.냉동보관이 아닙니다.냉동보관시 식감이 떨어질수*/}
            {/*                            잇어요.진공포장이라 김치냉장고에 보관하면 좀더 오래먹을수 잇을꺼 같아요.먹어보고 맛잇으면 또 주문할께요.전자렌지나 에어프라이어에 짧은시간에*/}
            {/*                            돌려서 먹을수 잇으니 간편합니다. </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="sector"></div>*/}
            {/*                <div className="product-detail">*/}
            {/*                    <div className="user-info-wrap">*/}
            {/*                        <div className="user-info">*/}
            {/*                            <p id="product-star">★★★★★</p> <p>ita******</p>*/}
            {/*                        </div>*/}
            {/*                        <img src="./images/not-found.png"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="product-review">*/}
            {/*                        <p className="p1">오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 69g</p>*/}
            {/*                        <p className="p2">2024-09-28 작성</p>*/}
            {/*                        <p className="p3">1+1이라 다이어트용으로 10개 주문햇어요.원플원이라 20개 잘받앗네요.개당 가격은 비싸지만 원플원이라 그나마*/}
            {/*                            괞네요.맛잇다고해서 한달 먹을꺼주문햇네요.유통기한은 10월24일까지라 3주 입니다.원플원이라 딱 10개 주문하면 무료배송에 20개 와서 하루에*/}
            {/*                            하나씩 먹으면 유통기한 전까지 먹을수 잇어요.다이어트용으로 좋아요.그리고 냉장보관 입니다.냉동보관이 아닙니다.냉동보관시 식감이 떨어질수*/}
            {/*                            잇어요.진공포장이라 김치냉장고에 보관하면 좀더 오래먹을수 잇을꺼 같아요.먹어보고 맛잇으면 또 주문할께요.전자렌지나 에어프라이어에 짧은시간에*/}
            {/*                            돌려서 먹을수 잇으니 간편합니다. </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="btn3">*/}
            {/*                <div className="btn3-info">*/}
            {/*                    <p className="h6">배송지역</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>전국</li>*/}
            {/*                        <li>일부 도서, 산간 지역은 배송불가하거나 배송기간이 길어질 수 있으며, 추가 배송비가 발생할 수 있습니다.</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <div className="btn3-info">*/}
            {/*                    <p className="h6">배송비</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>3만원 이상 구매 시 전 상품(냉장 배송 포함) 무료배송</li>*/}
            {/*                        <li>3만원 미만 주문 시 상온제품은 2,500원 / 냉장냉동제품은 3,500원의 배송비가 부과됩니다.</li>*/}
            {/*                        <li>단, 3만원 미만이라도 일부 상품은 무료배송 될 수 있으니 자세한 내용은 상품 개별 페이지를 확인해주시기 바랍니다.</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <div className="btn3-info">*/}
            {/*                    <p className="h6">업체(제휴) 배송 제품</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>업체배송 제품의 배송비는 업체별 배송정책에 따라 달라질 수 있습니다. 상품 개별 페이지에 배송비를 확인해 주시기 바랍니다.</li>*/}
            {/*                        <li>※ 각각의 주문 건에 대해 수령지가 일치할 경우 합포장 되어 배송될 수 있으며, 이로 인한 배송료 환불은 불가 합니다.</li>*/}
            {/*                        <li>※ 주문건에 대한 별도 포장을 원하시는 경우, 수령인명 (혹은 주소지)를 약간 다르게 표기하셔야 합니다.</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <div className="btn3-info">*/}
            {/*                    <p className="h6">배송기간</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>밴드배송/쿨밴드배송/업체(제휴)배송 상품</li>*/}
            {/*                        <li>통상 입금 확인일 기준으로 2일~3일소요됩니다. (주말제외)</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <div className="btn3-info">*/}
            {/*                    <p className="h6">배송방식</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>pow몰에서는 신선한 상품 유통을 위하여 상온, 냉장, 개별배송, 부분합배송, 합배송 등의 다양한 배송방식을 채택하고 있습니다.</li>*/}
            {/*                        <li>네이버페이로 주문/결제 시, ‘My 큐커 플랜’ 결제금액에 합산되지 않습니다.</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <p className="h6">주문 및 배송에 관한 자세한 상담이나 궁금하신 점이 있을 경우 고객센터의 FAQ나 1:1상담 게시판, 또는 고객센터*/}
            {/*                    1588-3745를 통해서 안내 받으실 수 있습니다. </p>*/}
            {/*            </div>*/}
            {/*            <div className="btn4">*/}
            {/*                <div className="btn4-info">*/}
            {/*                    <p className="h6">교환/반품이 가능한 경우</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>제품 수령일 기준 30일 이내 (단, 구매자 단순변심 반품일 경우 수령 후 7일 이내) 반품이 가능합니다.</li>*/}
            {/*                        <li>제품 수령 후 제품이 주문 내용과 다른 경우, 제품이 고객님께 인도될 당시 상품이 멸실 또는 훼손된 경우, 구매자 단순 변심(단, 냉장/냉동식품*/}
            {/*                            제외)의 경우 교환/반품이 가능합니다.*/}
            {/*                        </li>*/}
            {/*                        <li>전자상거래 등에서의 소비자보호에 관한 법률에 규정되어 있는 소비자 청약철회 가능범위에 해당되는 경우 교환/반품이 가능합니다.</li>*/}
            {/*                        <li>통신판매업자가 방문 판매 등에 관한 법률에서 규정하고 잇는 광고에 표시하여야 할 사항을 표시하지 아니한 경우 교환/반품이 가능합니다.</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <div className="btn4-info">*/}
            {/*                    <p className="h6">교환/반품이 불가능한 경우</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>고객님의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우</li>*/}
            {/*                        <li>고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 감소한 경우</li>*/}
            {/*                        <li>시간이 경과되어 재판매가 곤란할 정도로 상품의 가치가 상실된 경우(냉장, 냉동 제품 등)</li>*/}
            {/*                        <li>고객 주문 확인 후 상품제작에 들어가는 주문제작 상품(횟감 등)</li>*/}
            {/*                        <li>기타 전자상거래 등에서의 소비자 보호에 관한 법률이 정하는 소비자 청약철회 제한에 해당되는 경우</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <p>제품을 교환/반품 하실 때의 배송비 비용에 대한 안내입니다.</p>*/}
            {/*                <div className="btn4-info">*/}
            {/*                    <p className="h6">※ powpow몰 부담</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>상품하자 등의 문제로 교환/반품을 하실 경우 고객상담실로 직접 교환/반품 접수 후 도착한 택배사를 통해 인도하여 주시면 해당상품을 재발송 혹은*/}
            {/*                            주문취소 처리해 드리겠습니다.*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <div className="btn4-info">*/}
            {/*                    <p className="h6">※ 고객님 부담</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>단순 고객 변심에 의한 교환/반품인 경우 고객님께서 반품관련 왕복배송비를 부담하셔야 합니다.</li>*/}
            {/*                        <li>네이버페이 결제 후, 반품 신청시에 자동수거가 불가합니다.</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <div className="btn4-info">*/}
            {/*                    <p className="h6">유의사항</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>반품 접수 절차 없이 임의로 반송할 경우, 반품 내용을 확인할 수 없으므로 환불이 지연되거나 환불이 되지 않을 수 있습니다. 그러므로 반드시*/}
            {/*                            절차에 따라 교환 및 반품하여 주시기 바랍니다.*/}
            {/*                        </li>*/}
            {/*                        <li>고객 변심 등의 귀책사유 접수 후 반품 접수일로부터 7영업일 이내에 반품배송비를 입금하지 않는 경우 반품접수 철회됩니다.</li>*/}
            {/*                        <li>(단, 반품배송비 입금 및 반품처리 완료 후 고객센터로 연락시 3영업일 이내 환불 접수 진행)</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*    <div className="banner-bottom">*/}
            {/*        <img src="./images/ad-banner.png"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default ProductDetail;