import React from "react";
import { Data, Board, Column } from "../types/interfaces";

interface IProps {
  setCurrentBoard(object: Board): void;
  allData: any;
}
const Sidebar = (props: IProps) => {
  const {allData, setCurrentBoard} = props;
  const handleBoardClick = (board: Board): any => {
    console.log('ass')
    const chosenBoard = allData.boards.find((selected: Board) => {
      return board.name === selected.name
    })
    setCurrentBoard(chosenBoard);
  }
console.log('ALL SIDECARE', allData)
  return (
  <nav>
   {allData.boards.map((board: Board) => {
    return <button onClick={() => handleBoardClick(board)}>{board.name}</button>
   })}
  </nav>
  )
}

export default Sidebar;