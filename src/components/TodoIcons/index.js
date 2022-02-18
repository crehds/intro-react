import { FaCheck } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import './styles.css';

const iconTypes = {
  check: (color) => <FaCheck className='icon check' color={color} />,
  delete: (color) => <AiFillDelete className='icon delete' color={color} />
};

function TodoIcon({ type, color = 'gray', onClick }) {
  return (
    <span className='Icon' onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
