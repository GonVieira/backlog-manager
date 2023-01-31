import styled from "styled-components";

export const HomepageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #171e22;
    height: 200%;
    width: 100%;
`

export const HomepageContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40%;

    h2 {
        position: absolute;
        color: white;
    }
`

export const BackgroundIMG = styled.img`
    opacity: 0.6;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
