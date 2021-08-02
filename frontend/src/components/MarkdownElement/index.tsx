import marked from 'marked';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js';

interface Props {
  text: string;
}

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: (code, lang) => {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    console.log(language);
    const res = hljs.highlight(code, { language }).value;
    console.log(res);
    return res;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

const MarkdownElement: React.FC<Props> = ({ text }) => (
  <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(text)) }} />
);

export default MarkdownElement;
