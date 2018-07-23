import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddDocument from './AddDocument';
import DeleteDocument from './DeleteDocument';

/* Main Component */
class Documents extends Component {

  constructor() {

    super();
    this.state = {
        documents: [],
    }
  }

  componentDidMount() {
    fetch('/api/documents')
        .then(response => {
            return response.json();
        })
        .then(documents => {
            this.setState({ documents });
        });
  }



 renderDocuments() {
    return this.state.documents.map(document => {
        return (
            <tr key={document.id} >
                <td>{ document.filename }</td>
                <td>{ document.extension }</td>
                <td><DeleteDocument document={document} onDelete={this.handleRemoveDocument.bind(this)} /></td>
            </tr>
        );
    })
  }

  handleAddDocument(document){

    var array = this.state.documents.concat(document);

    this.setState({documents: array});
  }

  handleRemoveDocument(document){
    var array = this.state.documents.filter(function(item) {
        return item !== document
      });


      this.setState({ documents: array});
  }

  render() {
    return (
        <div>
            <AddDocument onAdd={this.handleAddDocument.bind(this)} />

            <h2>Your files</h2>
            <small>Allowed types: png, jpg, pdf, doc, docx</small>
            <small>Max size is 5MB</small>
              <table>
                  <tbody>
                { this.renderDocuments() }
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
