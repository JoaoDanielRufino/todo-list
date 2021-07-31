import { InputHTMLAttributes } from 'react';

import { MyInput } from './styles';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => <MyInput {...props} />;

export default Input;
