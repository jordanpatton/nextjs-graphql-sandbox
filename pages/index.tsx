import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getDataFromTree } from '@apollo/react-ssr';
import gql from 'graphql-tag';

import withApollo from '../lib/withApollo';

const EXAMPLE_GQL = gql`
    query GetContinents {
        continents {
            name
        }
    }
`;

const Index: React.FC = () => {
    const { data, error, loading } = useQuery(EXAMPLE_GQL);
    if (loading) return <pre>Loading...</pre>;
    if (error) return <pre>{JSON.stringify(error, null, 4)}</pre>;
    return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export default withApollo(Index, { getDataFromTree });
