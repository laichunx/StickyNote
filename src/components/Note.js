import React, { useState } from 'react';
import styled from 'styled-components';

function Note(props) {
    let width = props.width;
    let height = props.height;
    let rgbaColor = '';
    let [left, setLeft] = useState(width);
    let [top, setTop] = useState(height);
    let [mouseOffsetX, setMouseOffsetX] = useState(0);
    let [mouseOffsetY, setMouseOffsetY] = useState(0);
    
    const onMouseEnterHandler = (side) =>{
        console.log(`Entered ${side}`)
    }

    const onCardDragHandler = (e) =>{
        console.log("X: " + e.clientX + " | Y: " + e.clientY);
        setLeft(e.clientX);
        setTop(e.clientY);
    }

    const onMouseClickHandler = (e) =>{
        console.log("Clicked X: " + e.clientX + " | Y: " + e.clientY)
        setMouseOffsetX(width-e.clientX);
        setMouseOffsetY(height-e.clientY);
    }
    
    const onBorderDragHandler = (e) =>{
        console.log("X: " + e.clientX + " | Y: " + e.clientY)
    }
    

    rgbaColor =`rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 2 * 10)/10})`
    return (
        <NoteCard draggable onClick={onMouseClickHandler} onDrag={onCardDragHandler} left={left} top={top} width={width} height={height} style={{ background:`${rgbaColor}`}}>
            {/* <TopBorder onDrag={onBorderDragHandler} onMouseOver={onMouseEnterHandler("Top")} width={width}></TopBorder>
            <div style={{ display: 'flex'}}>
                <LeftBorder onMouseOver={onMouseEnterHandler("Left")} height={height}></LeftBorder>
                <ContentDiv width={width} height={height}>
                    Card
                </ContentDiv>
                <RightBorder onMouseOver={onMouseEnterHandler("Right")} height={height}></RightBorder>
            </div>
            <BottomBorder onMouseOver={onMouseEnterHandler("Bottom")} width={width}></BottomBorder> */}
        </NoteCard>
  );
}

const NoteCard = styled.div`
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    /* margin: 100px; */
    min-width: 500px;
    min-height: 500px;
    /* width: ${props => props.width}px;
    height ${props => props.height}px; */
    cursor: pointer;
`

const ContentDiv = styled.div`
    width: 100%;
    height: 100%;
    width: ${props => props.width}px;
    height ${props => props.height}px;
    cursor: text;
`

const TopBorder = styled.div`
    min-width: 500px;
    height: 2px;
    width: ${props => props.width}px;
    background: transparent;
    cursor: n-resize;
`

const BottomBorder = styled.div`
    min-width: 500px;
    height: 2px;
    width: ${props => props.width}px;
    background: transparent;
    cursor: s-resize;
`

const LeftBorder = styled.div`
    width: 2px;
    min-height: 500px;
    height: ${props => props.height}px;
    background: transparent;
    cursor: w-resize;
`

const RightBorder = styled.div`
    width: 2px;
    min-height: 500px;
    height: ${props => props.height}px;
    background: transparent;
    cursor: e-resize;
`

export default Note;
