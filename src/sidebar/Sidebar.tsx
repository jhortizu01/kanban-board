import React from 'react';
import { Data, Board, Column } from '../types/interfaces';
import Select from 'react-select';

interface IProps {
  setCurrentBoard(object: Board): void;
  allData: any;
}

const Sidebar = (props: IProps) => {
  const { allData, setCurrentBoard } = props;
  const handleBoardClick = (choice: any): any => {
    console.log('ass');
    const chosenBoard = allData.boards.find((selected: Board) => {
      return choice.value === selected.name;
    });
    setCurrentBoard(chosenBoard);
  };

  const boardOptions: Object[] = [];

  return (
    <nav>
      {/* {allData.boards.map((board: Board) => {
    return <button onClick={() => handleBoardClick(board)}>{board.name}</button>
   })} */}
      {allData?.boards.map((board: Board) => {
        boardOptions.push({ value: board.name, label: board.name });
      })}

      <Select
        options={boardOptions}
        onChange={(choice) => handleBoardClick(choice)}
      />
    </nav>
  );
};

export default Sidebar;
