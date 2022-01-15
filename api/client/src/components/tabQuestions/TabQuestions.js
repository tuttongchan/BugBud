import React from 'react';
import './tabquestions.css';
import CodeEditor from '@uiw/react-textarea-code-editor';

const TabQuestions = () => {
  return (
    <div className="tabquestions-container">
      <div className="tabquestions-left-container">
        <h1>Questions</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          unde vero nisi dolorum eveniet magnam, similique officia beatae quasi
          delectus nam!
        </p>
      </div>
      <div className="tabquestions-right-container">
        <CodeEditor
          //   value={code}
          language="js"
          placeholder="Please enter JS code."
          //   onChange={(e) => setCode(e.target.value)}
          padding={15}
          style={{
            width: '100%',
            height: '70%',
            borderRadius: '5px',
            marginBottom: '2rem',
            // color: 'lightgreen',
            fontSize: 16,
            // backgroundColor: '#000',
            backgroundColor: '#f5f5f5',
            fontFamily:
              'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          }}
        />

        <CodeEditor
          //   value={code}
          language="js"
          placeholder="Please enter JS code."
          //   onChange={(e) => setCode(e.target.value)}
          padding={15}
          style={{
            width: '100%',
            height: '25%',
            borderRadius: '5px',
            fontSize: 16,
            backgroundColor: '#f5f5f5',
            fontFamily:
              'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          }}
        />
      </div>
    </div>
  );
};

export default TabQuestions;
