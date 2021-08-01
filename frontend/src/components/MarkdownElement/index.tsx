import marked from 'marked';
import DOMPurify from 'dompurify';

interface Props {
  text: string;
}

const MarkdownElement: React.FC<Props> = ({ text }) => (
  <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(text)) }} />
);

export default MarkdownElement;
