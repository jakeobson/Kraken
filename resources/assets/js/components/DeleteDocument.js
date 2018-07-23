import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* Main Component */
export default class DeleteDocument extends Component {

  constructor() {
    super();
  }

  deleteDocument(document){
    fetch( '/api/documents/' + document.id,
      { method: 'delete' })
      .then(response => {
        /* Duplicate the array and filter out the item to be deleted */
        var array = this.state.documents.filter(function(item) {
            return item !== document
        });

        this.setState({ documents: array});

    });
  }

  render() {
   /* Some css code has been removed for brevity */
    return (
        <button onClick={() => this.deleteDocument(document)} className="btn btn-danger btn-sm"><i className="fa fa-times"></i></button>
    );
  }
}
