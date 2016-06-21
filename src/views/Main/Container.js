import React, {PropTypes as T} from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react';
import {searchNearby} from 'utils/googleApiHelpers';
import Header from 'components/Header/Header';
import styles from './styles.module.css';
import Sidebar from 'components/Sidebar/Sidebar';

class Container extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
            places: [],
            pagination: null
        }
    }
    onReady(mapProps, map) {
        const {google} = this.props;
        const opts = {
            location: map.center,
            radius: '500',
            types: ['cafe']
        }
        searchNearby(google, map, opts)
            .then((results, pagination) => {
                this.setState({
                    places: results,
                    pagination
                })
            }).catch((status, result) => {

            })
    }
    render() {
        let children = null;
        if (this.props.children) {
            children = React.cloneElement(
                this.props.children,
                {
                    google: this.props.google,
                    places: this.state.places,
                    loaded: this.props.loaded,
                    router: this.context.router
                });
        }
        return (
            <Map
                className={styles.wrapper}
                onReady={this.onReady.bind(this) }
                google={this.props.google}
                visible={false}>
                <Header/>
                <Sidebar title={'Restaurants'}
                    places={this.state.places}
                    />
                <div className={styles.content}>
                    {children}
                </div>
            </Map>
        );
    }
};

export default GoogleApiWrapper({
    apiKey: __GAPI_KEY__
})(Container);