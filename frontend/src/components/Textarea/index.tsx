import { TextareaHTMLAttributes } from 'react';

import { MyTextarea } from './styles';

const Textarea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => <MyTextarea {...props} />;

export default Textarea;
