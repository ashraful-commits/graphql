
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:5050/',
    cache: new InMemoryCache(),
  });


