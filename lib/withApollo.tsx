import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import withApollo from 'next-with-apollo';

export default withApollo(
    ({ initialState }) => new ApolloClient({
        cache: new InMemoryCache().restore(initialState || {}),
        uri: 'https://countries.trevorblades.com',
    }),
    {
        render: ({ Page, props }) => {
            return (
                <ApolloProvider client={props.apollo}>
                    <Page {...props} />
                </ApolloProvider>
            );
        },
    },
);
