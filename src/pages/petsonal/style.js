import styled from "styled-components";
import { flexCenterRowSpaceBetween, flexColumnCenter, flexRowCenter,
  h1Bold, h1Medium, h2Bold, h4Bold,
  h6Medium,
  h7Bold
 } from '../../global/common'
 import theme from "../../global/theme";

const S = {}


// 메인 페이지

S.PetsonalContainer = styled.div`
  ${flexColumnCenter};
  
  & a {
    width: 464px;
    height: 55px;
    border-radius: 20px;
    border: solid 3px #000;
    color: white;
    background-color: #2298FF;
    position: absolute;
    top: 735px;
    ${h4Bold}
    cursor: pointer;
    ${flexRowCenter}
  }
`

S.StartImage = styled.div`
  position: relative;
  width: 100%;
  height: 1080px;
  max-width: 2080px;
`

S.MainFirst = styled.img`
  width: 100%;
  height: 1080px;
`

S.MainText = styled.p`
  top: 198px;
  font-size: 70px;
  font-weight: bold;
  position: absolute;
`

S.SecondImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1080px;
  background: #FFF5D0;
  position: relative;
`

S.SecondTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;
  position: absolute;
  top: 91px;
`

S.SecondText = styled.p`
  ${h1Bold}
`

S.SecondSubText = styled.p`
  font-size: ${theme.FONT_SIZE.h7};
`

S.BookWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 33px;
  width: 1070px;
  margin-top: 123px;
`


S.Big = styled.span`
  font-size: 50px;
  font-weight: bold;
`

S.Small = styled.span`
  ${h1Medium}
`

S.Medium = styled.p`
  font-size: 50px;
  font-weight: medium;
`

S.TextButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

S.GoCommunity = styled.div`
  width: 395px;
  height: 80px;
  color: white;
  background-color: #9747FF;
  border: solid 3px black;
  border-radius: 20px;
  ${h4Bold}
  ${flexRowCenter}
  cursor: pointer;
`

S.FinalImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 68px;

    & img { margin-bottom: 250px }
`


S.FinalText = styled.div`
  margin-top: 160px;
  font-size: 40px;
  font-weight: bold;
`

S.ThirdImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1080px;
  background: white;
  position: relative;
`

// test페이지 1

S.Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`

S.PetTestContainer = styled.div`
  ${flexColumnCenter}
  gap: 175px;
	margin: 200px 0;
`

S.Questions = styled.div`
  ${flexColumnCenter};
`

S.Question = styled.p`
	${h2Bold}
`

S.CirclesWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 84px;
	width: 1200px;
`

S.Circles = styled.div`
  ${flexCenterRowSpaceBetween}
  width: 708px;
`

S.BigCircle = styled.input`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	border: solid 3px #828282;
	cursor: pointer;
`

S.MiddleCircle = styled.input`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	border: solid 3px #828282;
	cursor: pointer;
`

S.SmallCircle = styled.input`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	border: solid 3px #828282;
	cursor: pointer;
`

S.NextButton = styled.button`
  width: 464px;
  height: 55px;
  background-color: #FFC303;
  ${h7Bold};
  border-style: none;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 30px;
  ${flexRowCenter};
`
// 결과 페이지
S.ResultContainer =styled.div`
  width: 1440px;
  ${flexColumnCenter};
  margin-top: 200px;
  `

S.ColorWrap =styled.div`
  ${flexColumnCenter};
`

S.ColorText =styled.p`
  font-size: 40px;
  font-weight: bold;
  color: #FAAF04;
`

S.OrangeResult =styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 98px;
  gap: 13px;

    & li {
      list-style-type: disc !important;
      display: list-item;
    }
`

S.ResultBox =styled.div`
  margin-top: 144px;
  width: 1440px;
  height: 885px;
  background: rgba(255, 204, 102, 0.7);
  gap: 180px;
  ${flexRowCenter};
`

S.PetProfile =styled.div`
  gap: 34px;
  width: 292px;
  ${flexColumnCenter};
  
  &p {
    font-size: 40px;
    color: white;
    font-weight: bold;
  }
`

S.PetImage =styled.img`
  width: 292px;
  height: 292px;
  border-radius: 50%;
`

S.RateWrap =styled.div`
  ${flexColumnCenter};
  width: 505px;
  gap: 60px;
`

S.ResultName =styled.p`
  ${h1Bold}
`

S.PercentageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`

S.AllRate = styled.div`
  width: 505px;
  ${flexColumnCenter};
`

S.ResultCategory = styled.div`
  display: flex;
  justify-content: space-between;
  width: 505px;

    &span {
      ${h6Medium}
    }
`

S.PercentageWrap = styled.div`
  width: 500px;
  ${flexCenterRowSpaceBetween}
`

S.Percent = styled.div`
  width: 408px;
  height: 20px;
  border-radius: 20px;
  background-color: white;
`

S.ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
`

S.ProductsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
`

S.Matching = styled.p`
  width: 1440px;
  text-align: left;
  margin-top: 150px;
  font-size: 40px;
  font-weight: 700;
`

S.Products = styled.div`
  ${flexCenterRowSpaceBetween}
  width: 1440px;
`

S.ProductCard = styled.div`
  ${flexColumnCenter}
  width: 342px;
  height: 457px;
  border-radius: 10px;
  background-color: #f8f9fa;
  position: relative;
`

S.CardImage = styled.img`
  margin-top: 21px;
  border-radius: 10px;
  width: 290px;
  height: 290px;
`

S.CardHeartIcon = styled.img`
  width: 20px;
  height: 20px;
  position:absolute;
  z-index: 10;
  right: 29px;
  top: 25px;
`

S.CardTextWrap = styled.div`
  display: flex;
  margin: 12px 0 20px 0;
  flex-direction: column;
  gap: 10px;

    &b {
      width: 290px;
      text-align: left;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 26px;
    }
`

S.ProductName = styled.p`
  width: 290px;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 18px;
`

S.CardCart = styled.div`
  width: 290px;
  height: 36px;
  ${flexRowCenter}
  gap: 8px;
  border-radius: 10px;
  border: solid 1px #e0e0e0;
  background-color: white;

    & img {
      width: 20px;
      height: 20px;
    }
`



export default S;