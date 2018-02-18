import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from 'js/components/App';
import { addCalculateTriangleResult } from 'js/actions/calculateActions';

class AppContainer extends Component {
    render() {
        const { onCalculateClick, result } = this.props;
        return (
           <App
                onCalculateClick={ onCalculateClick }
                result={ result }
           /> 
        )
    }
}

function mapStateToProps(state) {
    return {
        result: state.reducer.latestResult.result
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onCalculateClick: result =>{
            dispatch(addCalculateTriangleResult(result));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
