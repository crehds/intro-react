import { CompleteIcon, DeleteIcon } from '../../../TodoIcons/customIcons';
import './styles.css';

function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <CompleteIcon complete={props.complete} onComplete={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };
