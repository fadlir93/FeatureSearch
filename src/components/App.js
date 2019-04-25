import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App  extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: process.env.REACT_APP_CLIENT_ID
            }
        })
        console.log(response.data.results)
        console.log(process.env)
    }
    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit1={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App;