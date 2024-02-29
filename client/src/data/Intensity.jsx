import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import IntensityChart from '../charts/IntensityChart';


const GET_INSIGHTS = gql`
    query ExampleQuery {
        getInsights {
            intensity,
            title,
            relevance  
        }
    }
`;

const App = () => {
    const [response, setResponse] = useState([]);
    const { loading, error, data } = useQuery(GET_INSIGHTS);

    useEffect(() => {
        if (data && data.getInsights) {
            setResponse(data.getInsights);
        }
    }, [data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Intensity Chart</h1>
            <IntensityChart data={response} />
        </div>
    );
};

export default App;
