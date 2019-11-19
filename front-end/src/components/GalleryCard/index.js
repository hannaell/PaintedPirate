import React, { useState, useEffect } from 'react'
import EmblaCarouselReact from 'embla-carousel-react'
import styled from 'styled-components';

const CarouselStyled = styled.div`
    min-height: 100vh;
    width: 90vw;
    display: flex;
    align-items: center;

`;

const ButtonStyled = styled.img`
    width: 2.1vw;
    margin-top: 12.7vh;
`;

const ImgDiv = styled.div`
    margin-top: 12.7vh;
    margin-bottom: 6.7vh;
    width: 48.8vw;
`;

const ImgStyled = styled.img`
    width: 48.8vw;
`;


const GalleryCard = () => {
    const [embla, setEmbla] = useState(null) 
    useEffect(() => {
        if (embla) {
            embla.on('select', () => {
                console.log(`Current index is ${embla.selectedScrollSnap()}`)
            })
        }
    }, [embla])
    
    return (
        < CarouselStyled >
            <ButtonStyled src='../images/left-arrow-button.svg' onClick={() => embla.scrollPrev()}></ButtonStyled>
            <EmblaCarouselReact
                emblaRef={setEmbla}
                options={{ loop: true }}
            >
                <div style={{ display: 'flex' }}>
                    <ImgDiv style={{ flex: '0 0 100%' }}><ImgStyled src='images/bild1.jpg'></ImgStyled></ImgDiv>
                    <ImgDiv style={{ flex: '0 0 100%' }}><ImgStyled src='images/ppbild2.jpg'></ImgStyled></ImgDiv>
                    <ImgDiv style={{ flex: '0 0 100%' }}><ImgStyled src='images/ppbild3.jpg'></ImgStyled></ImgDiv>
                    <ImgDiv style={{ flex: '0 0 100%' }}><ImgStyled src='images/ppbild4.jpg'></ImgStyled></ImgDiv>
                    <ImgDiv style={{ flex: '0 0 100%' }}><ImgStyled src='images/ppbild5.jpg'></ImgStyled></ImgDiv>
                </div>
            </EmblaCarouselReact>
           <ButtonStyled src='../images/right-arrow-button.svg' onClick={() => embla.scrollNext()}></ButtonStyled>
        </CarouselStyled>
    );
}

export default GalleryCard;