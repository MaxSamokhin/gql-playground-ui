import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'http://localhost:3000/graphql', // This points to our GraphQL endpoint for fetching the API schema map.
    documents: 'src/gql/client/**/*.graphql', // 'src/components/**/*.{ts,tsx}', // This tells GraphQL Codegen where to look for our schema files
    generates: {
        'src/gql/generated/graphql.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo']
        }
    }
};

export default config;

// graphql-codegen/typescript - This plugin generates the base TypeScript types, based on your GraphQL schema.

// typescript-operations -This plugin generates TypeScript types based on your GraphQLSchema and your GraphQL operations and fragments.
// It generates types for your GraphQL documents: Query, Mutation, Subscription and Fragment.

// typescript-graphql-request  This plugin generates graphql-request ready-to-use SDK, which is fully-typed.

// typescript-react-apollo - This plugin generates React Apollo components and HOC with TypeScript typings.
