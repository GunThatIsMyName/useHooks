import {useEffect, useState, useRef} from 'react';


// const useTitle = (defaultTitle) => {
//   const [title, setTitle] = useState(defaultTitle);
//   const htmlTitleUpdate = () => {
//     const titleHtml = document.querySelector('title');
//     titleHtml.innerText = title;
//   };
//   useEffect(htmlTitleUpdate, [title]);
//   return setTitle;
// };

const useClick = (onClick) => {
  const btn = useRef();
  useEffect(() => {
    if (btn.current) {
      btn.current.addEventListener('click', onClick);
    }
    return () => {
      if (btn.current) {
        btn.current.removeEventListener('click', onClick);
      }
    };
  });
  return btn;
};

const Minji = () => {
  const 무야호 = () => {
    console.log('무야호');
  };
  const title = useClick(무야호);
  return (
    <>
      <h1>hi</h1>
      <button ref={title}>click</button>
    </>
  );
};

export default Minji;