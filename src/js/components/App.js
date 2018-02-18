import React from 'react';
import { connect } from 'react-redux';
import Calculate from './Calculate';
import Result from './Result'

const App = (props) => {
    const { onCalculateClick, result } = props;
    return (
        <div className="main">
            <div className="row-first">
                <Calculate 
                    onCalculateClick={ onCalculateClick }
                />
            </div>
            <div className="row-second">
                <Result 
                    result={ result }
                />
            </div>
        </div>
    )
}

export default App;
