import React, { useRef, useEffect, useState } from "react";
import Matrix from './Matrix';

function Canvas() {
    const canvasRef = useRef(null);
    const [gotCanvas, setGotCanvas] = useState(false);
    const [canvasSize, setCanvasSize] = useState({ x: window.innerWidth, y: window.innerHeight });

    useEffect(() => {

        if (canvasRef) {
            setGotCanvas(true);
        }
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;

        async function resizeHandler() {
            setCanvasSize({ x: window.innerWidth, y: window.innerHeight });
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
        }
        window.addEventListener("resize", resizeHandler);

        // const context = canvasRef.current.getContext('2d');
        // context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                style={{ border: '1px solid black' }}
                className="bg"
            />
            {gotCanvas ?
                <Matrix _canvas={canvasRef} canvasSize={canvasSize} /> : "static background"
            }

        </>);
}

export default Canvas;