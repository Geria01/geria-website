import { forwardedRef, useState } from 'react';
import dynamic from 'next/dynamic';
import MaxCharacterInfo from '@/components/MaxCharacterInfo';

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    const { default: Emoji } = await import('quill-emoji');
    RQ.Quill.register('modules/emoji', Emoji);
    return function forwardRef({ forwardedRef, ...props }) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  {
    ssr: false,
    loading: () => <p>Loding...</p>,
  });

import 'react-quill/dist/quill.snow.css';
import 'quill-emoji/dist/quill-emoji.css';

const TOOLBAR_OPTIONS = [
  [
    'emoji',
    'bold',
    'italic',
    { list: 'ordered' },
    { list: 'bullet' },
    'link',
  ],
];

const Editor = ({ values, setValues, handleChange }) => {

  let { about } = values;

  return (
    <>
      <ReactQuill
        theme='snow'
        placeholder='Tell us about you'
        modules={{
          toolbar: {
            container: TOOLBAR_OPTIONS
          },
          clipboard: {
            matchVisual: false
          },
          'emoji-toolbar': true,
          'emoji-textarea': false,
          'emoji-shortname': true,
        }}
        value={about}
        onChange={about => {
          // if (about === '<p><br></p>') return;
          setValues({ ...values, 'about': about })
        }}
      />
      <MaxCharacterInfo count={about && about !== '<p><br></p>' ? about.length : 0} max={500} />
    </>
  )
}

export default Editor
