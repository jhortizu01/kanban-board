import { Column } from '../types/interfaces';
import { SingleTask } from '../task/SingleTask';
import { Task } from '../types/interfaces';
interface IProps {
  column: Column;
}

export const SingleColumn = (props: IProps) => {
  const { column } = props;

  return (
    <section className='column'>
      {column.tasks.length != 0
        ? column.tasks.map((task: Task) => {
            return <SingleTask task={task}/>
          })
        : null}
    </section>
  );
};
