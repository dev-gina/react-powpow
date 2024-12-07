import React, {useState} from 'react';
import S from "./style";
import { Link } from 'react-router-dom';


const ProfileUpdate = () => {

    const [formData, setFormData] = useState({
        memberImage : "",
        memberName : "Jane Ryo",
        memberNickName : "Jane",
        memberEmail : "example@gmail.com",
        memberPhone : "01012345678",
        memberAdress : "06544",
        memberAdressDetail : "Seoul 34th st."
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        console.log("input 데이터 전송: ", formData);
        alert("데이터가 전송되었습니다!");
    };

    return (
        <div>
            <S.MyHomeContainer>
                <S.MyHomeWrap>
                    <S.UpdateButtonWrap>
                        <button onClick={handleSubmit}><Link to={"/myhome"}>완료</Link></button>
                    </S.UpdateButtonWrap>
                    <S.ProfileBoxWrap>
                        <S.ProfileBox>
                            <S.ProfileImage>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/myhome/default-userImg.png`}
                                     alt="프로필사진"/>
                                <p>{formData.memberNickName}</p>
                            </S.ProfileImage>
                            <S.ProfileBoxImageWrap>
                                <button><Link to={"/"}>이미지 편집</Link></button>
                            </S.ProfileBoxImageWrap>
                        </S.ProfileBox>
                        <S.MemberInputBoxContainer>
                            <S.MemberInputBoxWrap>
                                <S.MemberInputBox>
                                    <S.h7>이름</S.h7>
                                    <input type="text" name="userName" placeholder="이름을 입력하세요" value={formData.memberName} onChange={handleChange}/>
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7>닉네임</S.h7>
                                    <input type="text" name="userNickName" placeholder="닉네임을 입력하세요" value={formData.memberNickName}
                                           onChange={handleChange}/>
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7>아이디(이메일)</S.h7>
                                    <input type="text" name="userEmail" placeholder="이메일을 입력하세요" value={formData.memberEmail}
                                           onChange={handleChange}/>
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7>휴대폰번호</S.h7>
                                    <S.MemberCertification>
                                        <input type="text" name="userPhone" placeholder="휴대폰 번호를 입력하세요" value={formData.memberPhone}
                                               onChange={handleChange}/>
                                        <p>인증번호</p>
                                    </S.MemberCertification>
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7Address>주소</S.h7Address>
                                    <S.MemberInputAddress>
                                        <S.ZipCode>
                                            <input type="text" name="memberAdress" placeholder="우편주소를 입력해주세요"
                                                   value={formData.memberAdress} onChange={handleChange}/>
                                            <p>우편번호</p>
                                        </S.ZipCode>
                                        <input type="text" name="memberAdress" placeholder="간편주소"
                                               value={formData.memberAdress} onChange={handleChange}/>
                                        <input type="text" name="memberAdressDetail" placeholder="상세주소를 입력하세요"
                                               value={formData.memberAdressDetail} onChange={handleChange}/>
                                    </S.MemberInputAddress>
                                </S.MemberInputBox>
                            </S.MemberInputBoxWrap>
                        </S.MemberInputBoxContainer>
                    </S.ProfileBoxWrap>
                </S.MyHomeWrap>
            </S.MyHomeContainer>
        </div>
    );
};

export default ProfileUpdate;