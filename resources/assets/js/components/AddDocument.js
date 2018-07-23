import React, { Component } from 'react';
import axios, { post } from 'axios';

export default class AddDocument extends Component
{
   constructor() {
      super();
      this.state ={
        document: '',
        file: null
      }
      this.onFormSubmit = this.onFormSubmit.bind(this)
      this.onChange = this.onChange.bind(this)
      this.fileUpload = this.fileUpload.bind(this)
    }
    onFormSubmit(e){
      e.preventDefault()
      this.fileUpload(this.state.file);
    }
    onChange(e) {
        this.setState({file: e.target.files[0]});
    }
    fileUpload(document){

        var formData = new FormData();
        formData.append('document', document);

        axios.post('/api/documents', formData, {headers: {'Content-Type': 'multipart/form-data'}})
        .then((response) => {
            this.props.onAdd(response.data);
        });


    }

   render()
   {
      return(
        <form onSubmit={this.onFormSubmit}>
            <h1>Please upload your document</h1>
            <input type="file"  onChange={this.onChange} />
            <button type="submit">Upload</button>
        </form>
      )
   }
}
