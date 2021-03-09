import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`;

export const StyledImageGallery = styled.div`
  .image-grid {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 15px;

    ${({ mediaQueries }) => mediaQueries.tablet} {
      grid-template-columns: 1fr 1fr;
      column-gap: 15px;
    }

    ${({ mediaQueries }) => mediaQueries.desktop} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      column-gap: 15px;
    }
  }

  .image-card {
    width: 100%;
    height: 100%;
    min-height: 300px;
    object-fit: cover;
    cursor: pointer;
  }

  .lightbox-img {
    height: 80vh;
    max-width: 90vw;
    object-fit: cover;
  }

  .lightbox {
    z-index: 1;
    position: fixed;
    top: 60px;
    width: calc(100% - ${({ scrollbarWidth }) => scrollbarWidth}px);
    right: 0;
    height: calc(100vh - 60px);
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-around;
    animation: ${fadeIn} 0.3s;  

    

    .gallery-wrapper {
      position: relative;

      button {
        background: transparent;
        border: none;
        cursor: pointer; 
        position: absolute;
        padding: 10px;
        top: calc(50% - 25px);

        :focus {
          outline: 0;
        }
        img {
          width: 50px;
        }
      }

  
      button:nth-child(1) {
        left: -20px;
        
        }
  
      button:nth-child(3) {
        right: -20px;
        }

        button:nth-child(4) {
          top: 0;
          right: 0;

          img {
            width: 25px
          }
          }
      }
    }
  }
`;
