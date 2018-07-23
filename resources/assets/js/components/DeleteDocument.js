import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* Main Component */
export default class DeleteDocument extends Component {

  constructor(props) {
    super(props);
  }

  deleteDocument(document){
      console.log(document);
    fetch( '/api/documents/' + document.id,
      { method: 'delete' })
      .then(response => {

        this.props.onDelete(document);

    });
  }

  render() {
   /* Some css code has been removed for brevity */
    return (
        <button onClick={() => this.deleteDocument(this.props.document)} className="btn btn-danger btn-sm"><i className="fa fa-times"></i></button>
    );
  }
}
