import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { MagicSquare } from "./components/MagicSquare";
import styled from 'styled-components'
import kkzn from './kkzn.svg';
import dejipiyo from './dejipiyo.svg';
import mKkzn from './m-kkzn.svg';
import mNanmin from './m-nanami.svg';

const useStyles = makeStyles((theme) => ({
  contaier: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#ffd1ea",
  },
  mainContaier: {
    height: "90%",
  },
  logoContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "50%",
  },
  magicSquareContent: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "30%",
  },
  magicSquareKkz: {
    display: "flex",
    flexDirection: "row",
  },
  dejipiyoTitle: {
    color: "white",
  },
  dejipiyoLogo: {
    marginTop: "50px",
    width: "200px",
    maxWidth: "40%",
  },
  nanamiLogo: {
    position: "absolute",
    right: "19%",
    width: "15%",
    maxWidth: "100px",
  },
  kkzLogo: {
    position: "absolute",
    left: "19%",
    width: "15%",
    maxWidth: "100px",
  },
  dejipiyoDescription: {
    color: "white",
  }
}));

const Kkzn = styled.div`
img {
  width: 80%;
}
z-index: 1;

animation: huwahuwa1 2s linear, huwahuwa2 2s 2s linear, huwahuwa3 2s 4s linear, huwahuwa4 3s 6s linear infinite;

@keyframes huwahuwa1 {
  0% {
      opacity:1;
      transform: translateY(150%);
  }
  33% {
    opacity:1;
    transform: translateY(150%);
}
  100% {
      opacity:0;
      transform: translateY(-150%);
  }
}

@keyframes huwahuwa2 {
  0% {
      opacity:1;
      transform: translateY(150%);
  }
  100% {
      opacity:0;
      transform: translateY(-150%);
      transform: translateX(60%);
  }
}

@keyframes huwahuwa3 {
  0% {
      opacity:1;
      transform: translateY(150%);
  }
  100% {
      opacity:0;
      transform: translateY(-150%);
      transform: translateX(-60%);
  }
}

@keyframes huwahuwa4 {
  0% {
      opacity:1;
      transform: translateY(150%);
  }
  50% {
      opacity:0;
      transform: translateY(-150%);
      transform: translateX(120%);
  }
  51% {
    opacity:0;
    transform: translateY(150%);
  }
  52% {
    opacity:1;
    transform: translateY(150%);
  }
  100% {
      opacity:0;
      transform: translateY(-150%);
      transform: translateX(-120%);
  }
}
`

const Mkkzn = styled.div`
max-width: 100%;
width: 100%;
animation: 3s ease-in 1s infinite both running slidein;

@keyframes slidein {
  from { transform: scaleX(1); }
  to   { transform: scaleX(0); }
}
`
const MNanan = styled.div`
max-width: 100%;
width: 100%;
animation: 3s ease-in 1s infinite both running slidein;

@keyframes slidein {
  from { transform: scaleX(1); }
  to   { transform: scaleX(0); }
}
`

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.contaier}>
        <div className={classes.mainContaier}>
        <div className={classes.logoContent}>
          <a href="https://dejipiyo.connpass.com/" target="_blank" rel="noopener noreferrer" className={classes.dejipiyoLogo} >
            <img src={dejipiyo} alt="dejipiyo-logo" />
          </a>
        
          <h1 className={classes.dejipiyoTitle}>でじぴよ</h1>
        </div>
        <div className={classes.magicSquareContent}>
          <Kkzn>
            <img src={kkzn} alt="logo" />
          </Kkzn>
          <MagicSquare></MagicSquare>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
