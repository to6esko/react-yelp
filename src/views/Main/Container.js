import React from 'react';
import Map,{GoogleApiWrapper} from 'google-maps-react';

class Container extends React.Component{
    render() {
        return (
            <div>
            Hello from container.
            <Map google={this.props.google}/>
            </div>
        );
    }
};

export default GoogleApiWrapper({
    apiKey:__GAPI_KEY__
})(Container);