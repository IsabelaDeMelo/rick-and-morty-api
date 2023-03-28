import Loading from "./Loading.svg";
import styled from "styled-components";

const Body = styled.body`
    height: 50vh;
    background-color: #f1f2f3;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 10vw;
    }
`

function Load() {
    return (
        <Body>
        <img src={Loading} alt="Loading gif" />
        </Body>
    )
}

export default Load