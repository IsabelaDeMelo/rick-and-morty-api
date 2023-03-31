import styled from "styled-components";

export const Title = styled.h1`
color: #202329;
font-size: 5.3em;
font-weight: 900;
text-align: center;

@media (max-width: 1024px) {
  position: relative;
  bottom: 0.6em;
}

 @media (max-width: 640px) {
    font-size: 4.5em;
 }

 @media (max-width: 480px) {
     font-size: 3.5em;
 }
}
`

export const HeaderContainer = styled.div`
background: rgba(255, 255, 255, 0.860);
height: 50vh;
`

export const Header = styled.section`
width: 98.5vw;
height: 50vh;
background-image: url(https://rickandmortyapi.com/api/character/avatar/19.jpeg);
background-repeat: no-repeat;
background-size: 25%;
background-position: top center;

@media (max-width: 1024px) {
  background-size: 40%;
  width: 96vw;
}

@media (max-width: 768px) {
  background-size: 55%;
}

@media (max-width: 640px) {
    background-size: 65%;
}

@media (max-width: 480px) {
  height: 40vh;
  width: 100vw;
  background-size: 70%;
}
`

export const Navegation = styled.nav`
display: flex;
justify-content: space-between;

@media (max-width: 1024px) {
  font-size: 1.2em;
  }

img {
  width: 5%;
  height: 6%;
  margin-top: .5em;
  margin-left: .5em;

  @media (max-width: 1024px) {
  width: 10%;
  }

  @media (max-width: 768px) {
  width: 15%;
  }

  @media (max-width: 480px) {
    width: 20%;
  }
}
`

export const List = styled.ul`
display: flex;
justify-content: right;
list-style: none;
gap: 1.5em;
font-weight: bold;
font-size: 1.2em;
padding-right: 2em;


li > a {
  color: #202329;
  border: none;
  background-color: transparent;
  font-size: 1em;
  font-weight: bold;
}

li > button {
  font-weight: bold;
  background-color: transparent;
  border: 1px solid #FF9800;
  border-radius: 0.5em;
  padding: 0.7em;

  @media (max-width: 1024px) {
    font-size: 0.75em;
    }

    @media (max-width: 480px) {
      width: 29vw;
      margin-top: -0.4em;
    }
   
}

li > button: hover {
  background-color: #FF9800;
  color: white;
  cursor: pointer;
}

li > a:hover {
  color: #FF9800;
  cursor: pointer;
}
`

export const Principal = styled.section`
width: 94.7vw;
padding-left: 4vw;
background-color: #202329;
`

export const Main = styled.section`
background-color: #202329;
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
padding-top: 10vh;
padding-bottom: 10vh;

@media (max-width: 1024px) {
  width: 100vw;
  display: flex;
  justify-content: center;
}

@media (max-width: 640px) {
    width: 96vw;
}

@media (max-width: 480px) {
  width: 100vw;
}
`

export const Card = styled.div`
background-color: #3C3E44;
width: 45vw;
height: 36vh;
color: white;
display: flex;
margin-left: 1vw;
margin-top: 5vh;
border-radius: .5em;
box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.150);

@media (max-width: 1024px) {
  height: 30vh;
  width: 68vw;
}

@media (max-width: 768px) {
  width: 93vw;
  height: 30vh;
  margin-right: 2em;
}

@media (max-width: 640px) {
    width: 90vw;
    height: 25vh;
    margin-left: 1.5em;
}

img {
width: 17vw;
height: 36vh;
border-radius: .5em 0 0 .5em;

@media (max-width: 1024px) {
  width: 25vw;
  height: 30vh;
}

@media (max-width: 768px) {
  width: 30vw;
}

@media (max-width: 640px) {
    height: 25vh;
}
`

export const CardInfo = styled.div`
height: 30vh;
margin-left: 0.7em;
line-height: 5px;
display: flex;
flex-direction: column;
justify-content: space-evenly;

@media (max-width: 1024px) {
  height: 25vh;
  font-size: 1.3em;
}

@media (max-width: 640px) {
    font-size: 1em;
}

p {
color: #988F81;
 font-weight: bold;
}

`

export const NameStatus = styled.div`
h2 {
width: 28vw;
font-size: 1.8em;
font-weight: bold;

@media (max-width: 1024px) {
  width: 44vw;
}

@media (max-width: 768px) {
  width: 62vw; 
}

@media (max-width: 640px) {
    width: 60vw;
}
}

h2: hover {
  color: #FF9800;
  cursor: pointer;
}

p {
color: white;
}
`

export const Location = styled.div`
margin-bottom: 1em;

span:hover {
  color: #FF9800;
  cursor: pointer;
}
`

export const Episode = styled.div`
  span:hover {
    color: #FF9800;
    cursor: pointer;
}

@media (max-width: 640px) {
  margin-bottom: 2em;
}
`

