import React from 'react';

const Result = props => {
    const { result } = props;
    return (
        <p className="result__paragraph">
            {result}
        </p>
    )
}

export default Result;
