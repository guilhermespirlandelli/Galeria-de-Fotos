import styled from "styled-components";

export const Container = styled.div`
    background-color: #27282F;
    color: #fff;
    min-height: 100vh;
`;
export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding:
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margim-bottom: 30px:
`;

export const ScreenWarning = styled.div`
    text-align: center;
    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }
`;
export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const UploadForm = styled.form`
    background-color: gray;  
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    margin-top: 30px;

    input[type=submit] {
        background-color: purple;
        border: 0;
        color: #fff;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;    
        
        &:hover {
            opacity: .75;            
        }
    }
`;