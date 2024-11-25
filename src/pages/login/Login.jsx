import React from 'react';
import S from "./style";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const {
        register, handleSubmit, formState: { isSubmitting, errors }
    } = useForm({ mode: "onChange" });

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

    return (
        <form onSubmit={handleSubmit(async (data) => {
            await fetch("http://localhost:10000/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // 로그인 데이터
                })
            })
        })}>

            <S.InputBox>
                <label>
                    <S.Input type="text" id='email' placeholder='회원 아이디(이메일)를 입력해주세요'
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: emailRegex,
                            }
                        })}
                    />
                    {errors && errors?.email?.type === "required" && (
                        <S.P>이메일을 입력하세요</S.P>
                    )}
                    {errors && errors?.email?.type === "pattern" && (
                        <S.P>이메일 양식에 맞게 입력해주세요.</S.P>
                    )}
                </label>
            </S.InputBox>

            {/* 비밀번호 로직 만들기 */}
            <label>
                <S.Input type="password" id='password' placeholder='회원 비밀번호를 입력해주세요'
                    autoComplete='off'
                    {...register("password", {
                        required: true,
                        pattern: {
                            value: passwordRegex,
                        }
                    })}
                />
                {errors && errors?.password?.type === "required" && (
                    <S.P>비밀번호를 입력하세요</S.P>
                )}
                {errors && errors?.password?.type === "pattern" && (
                    <S.P>소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야 합니다.</S.P>
                )}
            </label>

            <S.LoginButton disabled={isSubmitting}>로그인</S.LoginButton>
            <S.Box4>
                <S.Box3>
                    <S.SaveBox>
                        <S.SaveEmail type='checkbox'></S.SaveEmail>
                        <S.IdSave>아이디 저장</S.IdSave>
                    </S.SaveBox>
                    <Link to={"/findAccount"}>
                        <S.Forgot>아이디 혹은 비밀번호를 잊어버리셨나요?</S.Forgot>
                    </Link>
                </S.Box3>
            </S.Box4>
            <S.TextBox>
                <S.Text>계정이 없으신가요?</S.Text>
                <S.TextDivider>|</S.TextDivider>
                <Link to={"/join"}>
                    <S.JoinButton name="action" value="join">회원가입</S.JoinButton>
                </Link>
            </S.TextBox>
            <S.Text2>Or continue with</S.Text2>
            <S.ApiLogo>
            <Link to={"/"}>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/login/kakao.svg`} alt="카카오 로그" />
                    </Link>
            <Link to={"/"}>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/login/naver.svg`} alt="네이버 로그" />
                    </Link>
            <Link to={"/"}>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/login/google.svg`} alt="구글 로그" />
                    </Link>
            </S.ApiLogo>
            <S.BottonBox>
            <S.BottonText>이용약관</S.BottonText>
            <S.BottonText1>|</S.BottonText1>
            <S.BottonText>개인정보처리방침</S.BottonText>
            <S.BottonText1>|</S.BottonText1>
            <S.BottonText>책임의 한계와 법적고지</S.BottonText>
            <S.BottonText1>|</S.BottonText1>
            <S.BottonText>회원정보 고객센터</S.BottonText>
          </S.BottonBox>
        </form>
    );
};

export default Login;