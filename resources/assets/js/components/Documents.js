import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddDocument from './AddDocument';
import DeleteDocument from './DeleteDocument';
import Search from './Search';

/* Main Component */
class Documents extends Component {

  constructor() {

    super();
    this.state = {
        documents: [],
        search: ''
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

  handleSearch(documents){
    this.setState({documents:documents});
  }

  renderTable(){
      if(this.state.documents.length > 0){
          return (
              <div>
            <h2>Your files</h2>
            <small>Allowed types: png, jpg, pdf, doc, docx</small>
            <small>Max size is 5MB</small>
              <table>
                  <thead>
                      <th>Filename</th>
                      <th>Extension</th>
                      <th></th>
                  </thead>
                  <tbody>
                { this.renderDocuments() }
                </tbody>
              </table>
              </div>
          );
      }
  }

  render() {
    return (
        <div>
            <AddDocument onAdd={this.handleAddDocument.bind(this)} />

            <hr />

            <Search onSearch={this.handleSearch.bind(this)} />

            <hr />

            { this.renderTable() }

        </div>
    );
  }
}


export default Documents;

if (document.getElementById('root')) {
    ReactDOM.render(<Documents />, document.getElementById('root'));
}
