import { Task, Subtask } from '../types/interfaces';
import { SubtaskModal } from '../subtaskModal/SubtaskModal';
interface IProps {
  task: Task;
}
export const SingleTask = (props: IProps) => {
  const { task } = props;
  console.log('TASK FROM TASK', task);
  const numOfSubTaskIncomplete = task.subtasks.reduce(
    (num: number, subTask: Subtask) => {
      if (subTask.isCompleted === true) {
        num += 1;
      }
      return num;
    },
    0
  );


  return (
    <div className='task'>
      <div className='task-title'> {task.title}</div>
      <div className='task-subtasks'>
        {' '}
        {task.subtasks.length != 0 ? numOfSubTaskIncomplete : null} of{' '}
        {task.subtasks.length}
      </div>
    </div>
  );
};
