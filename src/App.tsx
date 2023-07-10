import { useEffect, useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import { Data, Board } from './types/interfaces';
import { ToDoContainer } from './todo-container/ToDoContainer';

function App() {
  const [allData, setAllData] = useState<Data>({
    boards: []
  });
  const [currentBoard, setCurrentBoard] = useState<Board>({
    name: '',
    columns: [],
  });

  const fetchAll = () => {
    fetch('/api/boards')
      .then((res) => res.json())
      .then((data) => setAllData({
        boards: data.boards
      }))
  };

  console.log('CURRRRRENT BOARD', currentBoard)
  useEffect(() => {
    fetchAll();
  }, []);

  console.log(allData?.boards)
  return (
    <div className='App'>
      <Sidebar allData={allData} setCurrentBoard={setCurrentBoard}/>
      <ToDoContainer currentBoard={currentBoard}/>
    </div>
  );
}

export default App;
