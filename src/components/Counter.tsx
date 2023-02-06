import { useState } from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	}

	return (
		<div>
			<h1 className={classes.counter}>{count}</h1>
			<button onClick={increment} className={classes.button}>
				Increment
			</button>
		</div>
	);
}
 
export default Counter; 