import styled from 'styled-components';

export const ServicesWrapper = styled.section`
  padding: 2rem 1rem; 
  text-align: center;
  background-color: rgb(22, 19, 45);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 1.8rem; 
    color: #fff;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 3rem 1.5rem;

    h1 {
      font-size: 2rem; 
      margin-bottom: 2rem;
    }
  }
`;

export const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

export const Card = styled.div`
  background-color: rgb(99, 60, 255);
  border-radius: 8px;
  padding: 1.5rem; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  max-width: 300px;
  height: 200px;

  &:hover {
    transform: scale(1.05);
  }

  h2 {
    font-size: 1.6rem; 
    color: ${(props) => props.theme.menuLinkBody};
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem; 
    color: ${(props) => props.theme.menuLinkBody};
    text-align: justify;
  }

  @media (min-width: 768px) {
    padding: 2rem; 
    max-width: 460px;
    height: 260px;
    h2 {
      font-size: 1.8rem; 
    }
    p {
      font-size: 1rem;
    }
  }
`;
