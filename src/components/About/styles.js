import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-x: hidden; 
  flex-direction: column;
  align-items: center;
  justify-content: justify;
  padding: 2rem 1rem;
  background-color: rgb(22, 19, 45);
  color: ${(props) => props.theme.fontColor};

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

export const AboutContent = styled.div`
  margin: 1rem;
  text-align: center;
  max-width: 400px;

  @media (min-width: 768px) {
    display: flex;
    text-align: center;
    margin-left: 2rem;
    max-width: 800px;  
    justify-content: center;
    flex-direction: column;
  }
`;

export const AboutSocialMediaText = styled.h2`
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.family.secondary};
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    font-size: 1.2rem; 
  }
`;


export const AboutTitle = styled.h1`
  font-size: 1.4rem;
  font-family: ${(props) => props.theme.fonts.family.secondary};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.6rem;  
  }
`;

export const AboutDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  font-family: ${(props) => props.theme.fonts.family.default};
  text-align: justify;

  @media (min-width: 768px) {
    font-size: 1.1rem;  
    line-height: 1.8;
  }
`;

export const AboutSocialMedia = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.2rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const SocialMediaLink = styled.a`
  font-size: 2rem;
  color: rgb(99, 60, 255);
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.menuLinkBody};
  }
`;

export const AboutImage = styled.img`
  border-radius: 2%;
  width: 90%; 
  max-width: 400px;  
  object-fit: cover;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    width: 50%;
    max-width: 500px;  
    margin-right: 1rem;
  }

  @media (min-width: 1300px) {
    width: 40%;
    margin-right: 0;
  }
`;

export const AboutDivPai = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
    align-items: center;
  }
`;

export const AboutDivContatos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;

export const CVButton = styled.a`
  display: inline-block;
  background-color: rgb(99, 60, 255);
  color: ${(props) => props.theme.menuLinkBody};
  text-decoration: none;
  padding: 0.68rem 1.2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s ease;
  margin-top: 1.2rem;

  &:hover {
    opacity: 0.8;
  }
`;

