import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddDocument from './AddDocument';
import DeleteDocument from './DeleteDocument';

/* Main Component */
class Documents extends Component {

  constructor() {

    super();
    //Initialize the state in the constructor
    this.state = {
        documents: [],
    }
  }
  /*componentDidMount() is a lifecycle method
   * that gets called after the component is rendered
   */
  componentDidMount() {
    /* fetch API in action */
    fetch('/api/documents')
        .then(response => {
            return response.json();
        })
        .then(documents => {
            //Fetched product is stored in the state
            this.setState({ documents });
        });
  }

 renderProducts() {
    return this.state.documents.map(document => {
        return (
            /* When using list you need to specify a key
             * attribute that is unique for each list item
            */
            <tr key={document.id} >
                <td>{ document.filename }</td>
                <td>{ document.extension }</td>
                <td><DeleteDocument /></td>
            </tr>
        );
    })
  }

  deleteDocument(){

  }

  render() {
   /* Some css code has been removed for brevity */
    return (
        <div>
            <AddDocument />

            <h2>Your files</h2>
              <table>
                  <tbody>
                { this.renderProducts() }
                </tbody>
              </table>
            </div>

    );
  }
}


export default Documents;

if (document.getElementById('root')) {
    ReactDOM.render(<Documents />, document.getElementById('root'));
}
