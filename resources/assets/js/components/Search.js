import React, { Component } from 'react';
import axios, { post } from 'axios';

export default class Search extends Component
{
   constructor() {
      super();
      this.state ={
        search: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){

        this.setState({search: event.target.value});
        axios.post('/api/documents/search', {search:event.target.value})
        .then((response) => {
            this.props.onSearch(response.data);
        });

    }

   render()
   {
      return(
        <form onSubmit={this.onFormSubmit}>
            <h4>Search your documents</h4>
            <input type="text" value={this.state.search} onChange={this.handleChange}/>

        </form>
      )
   }
}
