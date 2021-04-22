import React from "react"
import styled from "styled-components"
import { AsteroidSVG } from "../../assets/svgIcons/AsteroidSVG"
import { DinoSVG } from "../../assets/svgIcons/DinoSVG"
import Button from "../../common/Button"

const Container = styled.div`
    position: relative;
    background: linear-gradient(90deg, #CFF37D 0%, #7DE88C 100%);
    border: 1px solid #000000;
    border-radius: 10px;
    width: 100%;
    height: 200px;
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0px 16px;
    z-index: -102;
    overflow: hidden;
    @media (max-width: 650px) {
        height: 391px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 0px;
    }
`

const Right = styled.div`
    text-align: center;
    width: 158px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 650px) {
        margin-top: 16px;
        height: auto;
    }
`

const Center = styled.div`
    padding-top: 24px;
    margin-right: 10%;
    width: 289px;
    text-align: left;
    @media (max-width: 650px) {
        width: 100%;
        margin-right: 0;
        padding: 0 16px;
        padding-top: 105px;
    }
`

const Text = styled.p`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
`

const TextBold = styled.p`
    font-family: HelveticaBold;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
`

const Header = styled.h1`
    font-family: HelveticaBold;
    font-size: 24px;
    line-height: 32px;
    text-decoration: underline;
`

const Parametrs = styled.div`
    margin-top:16px;
`

const Parametr = styled.div`
    display: flex;
    flex-direction:row;
    position: relative;
    padding: 0;
    margin-bottom:8px;
`

const ParametrText = styled.div`
    margin: 0;
    bottom: -5px;
    position:relative;
    padding-right:2px;
    flex-grow:0;
    z-index: -101;
`

const ParametrSpace = styled.div`
    border-bottom: 1px dotted #C2C2C2;
    flex-grow:1;
`

const ParametrData = styled.div`
    margin: 0;
    position:relative;
    bottom: -5px;
    padding-left:2px;
    flex-grow:0;
`

const WhiteSpace = styled.div`
    width: 100%;
    height: 246px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    display: none;
    z-index: -101;
    background: #FFF;
    @media (max-width: 650px) {
        display: block;
    }
`
const Dino = styled.div`
    position: absolute;
    bottom: 0px;
    left: 16px;
    z-index: -100;
    @media (max-width: 650px) {
        transform: scale(-1,1);
        bottom: 246px;
        right: 16px;
    }
`
const Aster = styled.div`
    position: absolute;
    bottom: 100px;
    left: 150px;
    z-index: -100;
    @media (max-width: 650px) {
        transform: scale(-1,1);
        bottom: 300px;
        left: 55px;
    }
`


const Asteroid: React.FC<any> = () => {
    return (
        <Container>
            <WhiteSpace />
            <Dino>
                <DinoSVG/>
            </Dino>
            <Aster>
                <AsteroidSVG/>
            </Aster>
            <Center>
                <Header>2021 FQ</Header>
                <Parametrs>
                    <Parametr>
                        <ParametrText>Дата</ParametrText>
                        <ParametrSpace />
                        <ParametrData>12 сентября 2021</ParametrData>
                    </Parametr>
                    <Parametr>
                        <ParametrText>Расстояние</ParametrText>
                        <ParametrSpace />
                        <ParametrData>7 235 024 км</ParametrData>
                    </Parametr>
                    <Parametr>
                        <ParametrText>Размер</ParametrText>
                        <ParametrSpace />
                        <ParametrData>85 м</ParametrData>
                    </Parametr>
                </Parametrs>
            </Center>
            <Right>
                <Text>
                    Оценка: <br />
                    <TextBold>не опасен</TextBold>
                </Text>
                <Button>На уничтожение</Button>
            </Right>
        </Container>
    )
}

export default Asteroid