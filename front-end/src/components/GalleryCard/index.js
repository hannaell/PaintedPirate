import React, { useState, useEffect } from 'react'
import EmblaCarouselReact from 'embla-carousel-react'
import styled from 'styled-components';

const CarouselStyled = styled.div`
    height: 100vh;
    width: 80vw;
    display: flex;
    align-items: center;
`;

const ButtonStyled = styled.button`
    height: 2vh;
    width: 6vw;
`;

const ImgDiv = styled.div`
    width: 41.6vw;
    margin-top: 12vh;
`;

const ImgStyled = styled.img`
    width: 41.6vw;
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
            <ButtonStyled onClick={() => embla.scrollPrev()}>Prev</ButtonStyled>
            <EmblaCarouselReact
                emblaRef={setEmbla}
                options={{ loop: true }}
            >
                <div style={{ display: 'flex' }}>
                    <ImgDiv style={{ flex: '0 0 100%' }}><ImgStyled src='images/paintedpiratelogo.jpg'></ImgStyled></ImgDiv>
                    <ImgDiv style={{ flex: '0 0 100%' }}><ImgStyled src='images/tattooPP.jpg'></ImgStyled></ImgDiv>
                    <ImgDiv style={{ flex: '0 0 100%' }}><ImgStyled src='images/tattooPP2.jpg'></ImgStyled></ImgDiv>
                    <ImgDiv style={{ flex: '0 0 100%' }}><ImgStyled src='images/paintedpirate-tshirt-mockup-merch.jpg'></ImgStyled></ImgDiv>
                </div>
            </EmblaCarouselReact>
            <ButtonStyled onClick={() => embla.scrollNext()}>Next</ButtonStyled>
        </CarouselStyled>
    )
}

export default GalleryCard;