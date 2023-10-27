import styled from '@emotion/styled';

const Container = styled.div` 
padding: 16px;
`;

const Wrapper = styled.div` 
margin-bottom: 32px;

&:last-child{
    margin-bottom: 0;
}
`;

const TitleMain = styled.h1` 
display: flex;
padding-bottom: 12px;
font-size: 24px;
`;

const TitleSecond = styled.h2` 
padding-left: 15px;
padding-bottom: 12px;
`;

const Notif = styled.p` 
display: flex;
justify-content: center;
font-size: 20px;
`;

export {
  Container,
  Wrapper,
  TitleMain,
  TitleSecond,
  Notif
}
