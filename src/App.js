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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    maxWidth: "1200px",
    maxHeight: "600px",
    backgroundColor: "#ffd1ea",
    padding: "60px",
  },
  dejipiyoTitle: {
    color: "white",
  },
  dejipiyoLogo: {
    marginTop: "70px",
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
animation: huwahuwa 3s linear infinite;

@keyframes huwahuwa {
  0% {
      transform: translateY(100px);
  }
  100% {
      transform: translateY(-50px);
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
        <img className={classes.dejipiyoLogo} src={dejipiyo} alt="dejipiyo-logo" />
        <h1 className={classes.dejipiyoTitle}>でじぴよ</h1>
        <Kkzn>
          <img src={kkzn} alt="logo" width="150px" />
        </Kkzn>
        <MNanan>
          <img className={classes.nanamiLogo} src={mNanmin} alt="logo" />
        </MNanan>
        <Mkkzn>
          <img className={classes.kkzLogo} src={mKkzn} alt="logo" />
        </Mkkzn>
        <MagicSquare></MagicSquare>
      </div>
    </div>
  );
}

export default App;
