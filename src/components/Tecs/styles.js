import styled from 'styled-components';

export const TecsWrapper = styled.section`
  padding: 3rem;
  text-align: center;
  background-color: rgb(22, 19, 45);

  h1 {
    font-size: 1.8rem;
    color: #fff;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2rem; 
      margin-bottom: 2rem;
    }
  }
`;

export const TecsContent = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(99, 60, 255);
  border-radius: 8px;
  padding: 3rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Icon = styled.div`
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${(props) => props.theme.menuLinkBody};
`;
