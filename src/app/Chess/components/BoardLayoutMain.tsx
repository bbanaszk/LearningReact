"use client"
import React, { useState } from "react";

export default function BoardLayoutMain() {
    const [squares, setSquares] = useState(
        Array.from({ length: 64 }, (_, i) => ({
            id: i,
            isSelected: false,
            position: {
                row: Math.floor(i / 8),
                col: i % 8
            }
        }))
    );

    // Function to toggle selection of a square
    const toggleSelect = (id: number) => {
        setSquares(squares.map(square =>
            square.id === id ? { ...square, isSelected: !square.isSelected } : square
        ));
    };
    
    return(
        <div className="board-layout">
            <div className="board-layout-main">
                <div className="board-layout-chessboard">
                    {squares.map(square => (
                        <div
                            key={square.id}
                            onClick={() => toggleSelect(square.id)}
                            className={`square ${square.isSelected ? 'selected' : ''} ${(square.position.row + square.position.col) % 2 === 0 ? 'light' : 'dark'}`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}