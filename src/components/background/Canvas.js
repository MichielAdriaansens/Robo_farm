import React, { useRef, useEffect, useState } from "react";
import Matrix from './Matrix';

function Canvas() {
    const canvasRef = useRef(null);
    const [gotCanvas, setGotCanvas] = useState(false);

    useEffect(() => {

        if (canvasRef) {
            setGotCanvas(true);
        }
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;

        async function resizeHandler() {
            window.location.reload(false);
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
                <Matrix _canvas={canvasRef} /> : "static background"
            }

        </>);
}

export default Canvas;