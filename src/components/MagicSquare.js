import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import styled from 'styled-components'

const useStyles = makeStyles((theme) => ({
    contaier: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#ffd1ea",
        color: "white",
    },
    magicSquare: {
        display: "flex",
        position: "relative",
        border: "1px solid white",
        borderRadius: "50%",
    }
  }));

  export const MagicSquare = () => {
    const classes = useStyles();
    const Magic = styled.div`
    .container {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        background-color: #ffd1ea;
        color: white;
        transform: perspective(300px) rotateX(50deg);
        margin-top: 90px;
    }
    
    .magic-square {
        display: flex;
        align-items: center;
        justify-content: center;  
        position: relative;
        height: 200px;
        width: 200px;
        border: 1px solid white;
        border-radius: 50%;
        animation: magicSquare 10s linear infinite;
        box-shadow: 0 0 20px rgb(151, 112, 189);
    }
    
    .magic-square:hover {
        box-shadow: 0 0 30px 10px palevioletred
    }
    
    
    @keyframes magicSquare {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }
    
    .magic-square-inner-maru {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 184px;
        height: 184px;
        border: 1px solid white;
        border-radius: 50%;
    }
    
    .magic-square-inner-maru::after {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        position: absolute;
        width: 184px;
        height: 184px;
        border: 1px solid white;
        border-radius: 50%;
        content: '';
    }
    
    .magic-square-inner-shikaku-1 {
        box-sizing: border-box;
        position: absolute;
        top: 18%;
        left: 18%;
        height: 64.5%;
        width: 64.5%;
        border: 1px solid white;
    }
    
    .magic-square-inner-shikaku-2 {
        box-sizing: border-box;
        position: absolute;
        top: 18%;
        left: 18%;
        height: 64.5%;
        width: 64.5%;
        border: 1px solid white;
        transform:rotate(45deg);
    }
    
    .magic-square-inner-shikaku-3 {
        box-sizing: border-box;
        position: absolute;
        top: 18%;
        left: 18%;
        height: 64.5%;
        width: 64.5%;
        border: 1px solid white;
        transform:rotate(15deg);
    }
    
    .magic-square-inner-shikaku-4 {
        box-sizing: border-box;
        position: absolute;
        top: 18%;
        left: 18%;
        height: 64.5%;
        width: 64.5%;
        border: 1px solid white;
        transform:rotate(30deg);
    }
    
    .magic-square-inner-shikaku-5 {
        box-sizing: border-box;
        position: absolute;
        top: 18%;
        left: 18%;
        height: 64.5%;
        width: 64.5%;
        border: 1px solid white;
        transform:rotate(60deg);
    }
    
    .magic-square-inner-shikaku-6 {
        box-sizing: border-box;
        position: absolute;
        top: 18%;
        left: 18%;
        height: 64.5%;
        width: 64.5%;
        border: 1px solid white;
        transform:rotate(75deg);
    }
    
    .magic-square-part-2 {
        width: 60%;
        height: 60%;
        position: absolute;
        top: 20%;
        left: 20%;
    }
    
    .magic-square-part-3 {
        width: 50%;
        height: 50%;
        position: absolute;
        top: 25%;
        left: 25%;
    }
    
    .moji-12 {
        position: absolute;
        top: 0%;
        left: 50%;
    }
    
    .moji-1 {
        position: absolute;
        top: 17%;
        left: 67%;
    }
    
    .moji-2 {
        position: absolute;
        top: 34%;
        left: 84%;
    }
    
    .moji-3 {
        position: absolute;
        top: 50%;
        left: 100%;
    }
    
    .moji-4 {
        position: absolute;
        top: 67%;
        left: 84%;
    }
    
    .moji-5 {
        position: absolute;
        top: 84%;
        left: 67%;
    }
    
    .moji-6 {
        position: absolute;
        top: 100%;
        left: 50%;
    }
    
    .moji-7 {
        position: absolute;
        top: 59%;
        left: 1%;
        font-size: 7px;
    }
    
    .moji-7::after {
        position: absolute;
        top: 59%;
        left: 1%;
        font-size: 7px;
        content: 'タ';
    }
    
    .moji-8 {
        position: absolute;
        top: 47%;
        left: 0%;
        font-size: 7px;
    }
    
    .moji-8::after {
        position: absolute;
        top: 47%;
        left: 0%;
        font-size: 7px;
        content: 'ホ';
    }
    
    .moji-9 {
        position: absolute;
        top: 35%;
        left: 1%;
        font-size: 7px;
    }
    
    .moji-9::after {
        position: absolute;
        top: 33%;
        left: 2%;
        font-size: 7px;
        content: 'リ';
    }
    
    .moji-10 {
        position: absolute;
        top: 22%;
        left: 6%;
        font-size: 7px;
    }
    
    .moji-10::after {
        position: absolute;
        top: 22%;
        left: 6%;
        font-size: 7px;
        content: 'ホ';
    }
    
    .moji-11 {
        position: absolute;
        top: 12%;
        left: 13%;
        font-size: 7px;
    }
    
    .moji-11::before {
        position: absolute;
        top: 12%;
        left: 13%;
        font-size: 7px;
        content: 'ホ';
    }
  `;
    return (
      <>
        <div className={classes.contaier}>
            <Magic>
                <div class="container">
                    <div class="magic-square">
                        <div class="magic-square-inner-maru">
                            <div class="magic-square-inner-shikaku-1"></div>
                            <div class="magic-square-inner-shikaku-2"></div>
                            <div class="magic-square-inner-shikaku-3"></div>
                            <div class="magic-square-inner-shikaku-4"></div>
                            <div class="magic-square-inner-shikaku-5"></div>
                            <div class="magic-square-inner-shikaku-6"></div>
                        </div>
                        <div class="magic-square magic-square-part-2">
                            <div class="magic-square-inner-maru">
                                <div class="magic-square-inner-shikaku-1"></div>
                                <div class="magic-square-inner-shikaku-2"></div>
                                <div class="magic-square-inner-shikaku-3"></div>
                                <div class="magic-square-inner-shikaku-4"></div>
                                <div class="magic-square-inner-shikaku-5"></div>
                                <div class="magic-square-inner-shikaku-6"></div>
                            </div>
                            <div class="magic-square magic-square-part-3">
                                <div class="magic-square-inner-maru">
                                    <div class="magic-square-inner-shikaku-4"></div>
                                    <div class="magic-square-inner-shikaku-6"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Magic>
        </div>
      </>
    );
  };
  
