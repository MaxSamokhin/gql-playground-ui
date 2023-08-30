import { ApolloClient, HttpLink, InMemoryCache, from, makeVar } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

export const globalErrorMessageVar = makeVar<{ message: string | null }>({ message: null });

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    let message: string | null = null;

    if (graphQLErrors) {
        message = graphQLErrors
            .map(({ message, locations, path }) => {
                return `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`;
            })
            .join(', ');
    }

    if (networkError) {
        message = `[Network error]: ${networkError}`;
    }

    globalErrorMessageVar({ message });
    forward(operation);
});

const httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql'
});

export const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    // uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache({
        typePolicies: {
            Cat: {
                keyFields: ['id', 'age']
            }
        }
    })
});
