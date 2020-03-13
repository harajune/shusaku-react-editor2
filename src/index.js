import React from 'react';
import ReactDOM from 'react-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

import './index.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <CKEditor
          editor={BalloonEditor}
          data="<p>Hello from CKEditor</p>"
          onInit={
            editor => {
              editor.keystrokes.set('Tab', (data, cancel) => {
                editor.model.change( writer => {
                  // cursor position
                  const insertPosition = editor.model.document.selection.getFirstPosition();
                  const column = insertPosition.path[1];
                  writer.insertText( '    ', insertPosition );              
                });
                cancel();
              });
            }
          }
          onChange={(event, editor) => {
            const data = editor.getData();
          }}
          onBlur={(event, editor) => {
          }}
          onFocus={(event, editor) => {
          }}

        />

      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

