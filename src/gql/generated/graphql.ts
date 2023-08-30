import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Cat = {
  __typename?: 'Cat';
  age?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Owner>;
};

export type CreateCatInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCat?: Maybe<Cat>;
  deleteCat?: Maybe<Cat>;
  updateCat?: Maybe<Cat>;
};


export type MutationCreateCatArgs = {
  createCatInput?: InputMaybe<CreateCatInput>;
};


export type MutationDeleteCatArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateCatArgs = {
  updateCatInput?: InputMaybe<UpdateCatInput>;
};

export type Owner = {
  __typename?: 'Owner';
  age?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  cat?: Maybe<Cat>;
  cats?: Maybe<Array<Maybe<Cat>>>;
};


export type QueryCatArgs = {
  id: Scalars['String']['input'];
};

export type UpdateCatInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CatFragmentFragment = { __typename?: 'Cat', id?: string | null, name?: string | null, age?: number | null };

export type CreateCatMutationVariables = Exact<{
  createCatInput?: InputMaybe<CreateCatInput>;
}>;


export type CreateCatMutation = { __typename?: 'Mutation', createCat?: { __typename?: 'Cat', id?: string | null, name?: string | null, age?: number | null } | null };

export type DeleteCatMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteCatMutation = { __typename?: 'Mutation', deleteCat?: { __typename?: 'Cat', id?: string | null, name?: string | null, age?: number | null } | null };

export type GetCatByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCatByIdQuery = { __typename?: 'Query', cat?: { __typename?: 'Cat', id?: string | null, name?: string | null, age?: number | null } | null };

export type GetCatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCatsQuery = { __typename?: 'Query', cats?: Array<{ __typename?: 'Cat', id?: string | null, name?: string | null, age?: number | null } | null> | null };

export type UpdateCatMutationVariables = Exact<{
  updateCatInput?: InputMaybe<UpdateCatInput>;
}>;


export type UpdateCatMutation = { __typename?: 'Mutation', updateCat?: { __typename?: 'Cat', id?: string | null, name?: string | null, age?: number | null } | null };

export const CatFragmentFragmentDoc = gql`
    fragment CatFragment on Cat {
  id
  name
  age
}
    `;
export const CreateCatDocument = gql`
    mutation CreateCat($createCatInput: CreateCatInput) {
  createCat(createCatInput: $createCatInput) {
    ...CatFragment
  }
}
    ${CatFragmentFragmentDoc}`;
export type CreateCatMutationFn = Apollo.MutationFunction<CreateCatMutation, CreateCatMutationVariables>;

/**
 * __useCreateCatMutation__
 *
 * To run a mutation, you first call `useCreateCatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCatMutation, { data, loading, error }] = useCreateCatMutation({
 *   variables: {
 *      createCatInput: // value for 'createCatInput'
 *   },
 * });
 */
export function useCreateCatMutation(baseOptions?: Apollo.MutationHookOptions<CreateCatMutation, CreateCatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCatMutation, CreateCatMutationVariables>(CreateCatDocument, options);
      }
export type CreateCatMutationHookResult = ReturnType<typeof useCreateCatMutation>;
export type CreateCatMutationResult = Apollo.MutationResult<CreateCatMutation>;
export type CreateCatMutationOptions = Apollo.BaseMutationOptions<CreateCatMutation, CreateCatMutationVariables>;
export const DeleteCatDocument = gql`
    mutation DeleteCat($id: String!) {
  deleteCat(id: $id) {
    id
    name
    age
  }
}
    `;
export type DeleteCatMutationFn = Apollo.MutationFunction<DeleteCatMutation, DeleteCatMutationVariables>;

/**
 * __useDeleteCatMutation__
 *
 * To run a mutation, you first call `useDeleteCatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCatMutation, { data, loading, error }] = useDeleteCatMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCatMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCatMutation, DeleteCatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCatMutation, DeleteCatMutationVariables>(DeleteCatDocument, options);
      }
export type DeleteCatMutationHookResult = ReturnType<typeof useDeleteCatMutation>;
export type DeleteCatMutationResult = Apollo.MutationResult<DeleteCatMutation>;
export type DeleteCatMutationOptions = Apollo.BaseMutationOptions<DeleteCatMutation, DeleteCatMutationVariables>;
export const GetCatByIdDocument = gql`
    query GetCatById($id: String!) {
  cat(id: $id) {
    ...CatFragment
  }
}
    ${CatFragmentFragmentDoc}`;

/**
 * __useGetCatByIdQuery__
 *
 * To run a query within a React component, call `useGetCatByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCatByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCatByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCatByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCatByIdQuery, GetCatByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCatByIdQuery, GetCatByIdQueryVariables>(GetCatByIdDocument, options);
      }
export function useGetCatByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCatByIdQuery, GetCatByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCatByIdQuery, GetCatByIdQueryVariables>(GetCatByIdDocument, options);
        }
export type GetCatByIdQueryHookResult = ReturnType<typeof useGetCatByIdQuery>;
export type GetCatByIdLazyQueryHookResult = ReturnType<typeof useGetCatByIdLazyQuery>;
export type GetCatByIdQueryResult = Apollo.QueryResult<GetCatByIdQuery, GetCatByIdQueryVariables>;
export const GetCatsDocument = gql`
    query GetCats {
  cats {
    ...CatFragment
  }
}
    ${CatFragmentFragmentDoc}`;

/**
 * __useGetCatsQuery__
 *
 * To run a query within a React component, call `useGetCatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCatsQuery(baseOptions?: Apollo.QueryHookOptions<GetCatsQuery, GetCatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCatsQuery, GetCatsQueryVariables>(GetCatsDocument, options);
      }
export function useGetCatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCatsQuery, GetCatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCatsQuery, GetCatsQueryVariables>(GetCatsDocument, options);
        }
export type GetCatsQueryHookResult = ReturnType<typeof useGetCatsQuery>;
export type GetCatsLazyQueryHookResult = ReturnType<typeof useGetCatsLazyQuery>;
export type GetCatsQueryResult = Apollo.QueryResult<GetCatsQuery, GetCatsQueryVariables>;
export const UpdateCatDocument = gql`
    mutation UpdateCat($updateCatInput: UpdateCatInput) {
  updateCat(updateCatInput: $updateCatInput) {
    id
    name
    age
  }
}
    `;
export type UpdateCatMutationFn = Apollo.MutationFunction<UpdateCatMutation, UpdateCatMutationVariables>;

/**
 * __useUpdateCatMutation__
 *
 * To run a mutation, you first call `useUpdateCatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCatMutation, { data, loading, error }] = useUpdateCatMutation({
 *   variables: {
 *      updateCatInput: // value for 'updateCatInput'
 *   },
 * });
 */
export function useUpdateCatMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCatMutation, UpdateCatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCatMutation, UpdateCatMutationVariables>(UpdateCatDocument, options);
      }
export type UpdateCatMutationHookResult = ReturnType<typeof useUpdateCatMutation>;
export type UpdateCatMutationResult = Apollo.MutationResult<UpdateCatMutation>;
export type UpdateCatMutationOptions = Apollo.BaseMutationOptions<UpdateCatMutation, UpdateCatMutationVariables>;