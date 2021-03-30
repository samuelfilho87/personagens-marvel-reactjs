import styled from 'styled-components';

export const Container = styled.header`
  height: 64px;
  padding: 0 24px;
  background: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  width: 96px;
  height: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CandidatoContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    font-family: 'PT Sans Caption', sans-serif;

    @media screen and (max-width: 600px) {
      font-size: 12px;
      text-align: right;

      display: flex;
      flex-direction: column;
    }
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  margin-left: 16px;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;