import styled from "styled-components";

export const ProjectsWrapper = styled.section`
  padding: 2rem 1rem;
  text-align: center;
  background-color: rgb(22, 19, 45);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 3rem 1.5rem;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
  }
`;

export const ProjectsContent = styled.div`
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
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-image 0.3s ease;
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  max-width: 300px;
  height: 200px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
    border-radius: inherit;
  }

  &:hover {
    transform: scale(1.05);
    background-image: url(${(props) => props.image}),
      linear-gradient(to bottom, rgba(99, 60, 255, 0.3), rgba(99, 60, 255, 0.7));
    &::before {
      background-color: rgba(0, 0, 0, 0.1);
    }
    h3 {
      opacity: 0.5; 
    }
  }

  h3 {
    font-size: 1rem;
    color: ${(props) => props.theme.primaryText || "white"};
    margin-bottom: 1rem;
    z-index: 2;
    position: relative;
    transition: opacity 0.3s ease;
  }

  @media (min-width: 768px) {
    padding: 4rem;
    max-width: 400px;
    height: 300px;
  }
`;
