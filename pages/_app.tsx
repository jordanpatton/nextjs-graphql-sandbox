import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { getDataFromTree } from '@apollo/react-ssr';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { AppProps as NextAppProps } from 'next/app'
import withApollo from 'next-with-apollo';

interface AppProps extends NextAppProps {
    apollo: ApolloClient<any>;
}

const App = ({ apollo, Component, pageProps }: AppProps) => (
    <ApolloProvider client={apollo}>
        <Component {...pageProps} />
    </ApolloProvider>
);

export default withApollo(({ initialState }) => new ApolloClient({
    cache: new InMemoryCache().restore(initialState || {}),
    uri: 'https://countries.trevorblades.com',
}), { getDataFromTree })(App);
