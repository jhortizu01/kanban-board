import { Board, Column } from '../types/interfaces';
import { SingleColumn } from '../column/SingleColumn';

interface IProps {
  currentBoard: Board;
}

export const ToDoContainer = (props: IProps) => {
  const { currentBoard } = props;
  console.log('FROM TODO', currentBoard)

  return (
  <div className='toDoContainer'>
    {currentBoard?.columns.map((column: Column) => {
      return (
          <div className='toDoContainer-column'>
          <h2>{column.name}</h2>
          <SingleColumn column={column}/>
          </div>
          
         
      
      )
    })}
  </div>
  )
};
