import { CellOptions } from "../types";
import { Cell } from "./Cell";

interface Props {
    currentBoard: CellOptions[][]
}

export const Board = ({ currentBoard }: Props) => {
    return (
        <div className="board">
            {currentBoard.map((row, rowIndex) => {
                return (
                   <div className="row" key={`${rowIndex}`}>
                     {row.map((cell, colIndex) => (
                         <Cell key={`${rowIndex}-${colIndex}`} type={cell}/>
                     ))}
                    </div>
                )
            })}
        </div>
    )
}