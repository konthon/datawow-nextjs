/* eslint-disable */
/* prettier-ignore */
import { GraphQLClient, RequestOptions } from 'graphql-request';
import { DocumentNode } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
}

export interface Comment {
  __typename?: 'Comment';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['Int']['output'];
}

export interface CommentInput {
  content: Scalars['String']['input'];
}

export interface Community {
  __typename?: 'Community';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
}

export interface CreatePostInput {
  communityId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
}

export interface Mutation {
  __typename?: 'Mutation';
  addComment: Comment;
  createPost: Post;
  deleteComment: Comment;
  deletePost: Post;
  login: User;
  logout: Scalars['Boolean']['output'];
  updateComment: Comment;
  updatePost: Post;
}


export interface MutationAddCommentArgs {
  commentInput: CommentInput;
  postId: Scalars['Int']['input'];
}


export interface MutationCreatePostArgs {
  createPostInput: CreatePostInput;
}


export interface MutationDeleteCommentArgs {
  commentId: Scalars['Int']['input'];
}


export interface MutationDeletePostArgs {
  postId: Scalars['Int']['input'];
}


export interface MutationLoginArgs {
  username: Scalars['String']['input'];
}


export interface MutationUpdateCommentArgs {
  commentId: Scalars['Int']['input'];
  commentInput: CommentInput;
}


export interface MutationUpdatePostArgs {
  postId: Scalars['Int']['input'];
  updatePostInput: UpdatePostInput;
}

export interface Post {
  __typename?: 'Post';
  author: User;
  authorId: Scalars['Int']['output'];
  comments: Array<Comment>;
  commentsCount: Scalars['Int']['output'];
  community: Community;
  communityId: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
}

export interface Query {
  __typename?: 'Query';
  comment?: Maybe<Comment>;
  communities: Array<Community>;
  me: User;
  ourPosts: Array<Post>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  user?: Maybe<User>;
}


export interface QueryCommentArgs {
  commentId: Scalars['Int']['input'];
}


export interface QueryOurPostsArgs {
  authorId?: InputMaybe<Scalars['Int']['input']>;
  communityId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}


export interface QueryPostArgs {
  postId: Scalars['Int']['input'];
}


export interface QueryPostsArgs {
  authorId?: InputMaybe<Scalars['Int']['input']>;
  communityId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}


export interface QueryUserArgs {
  userId: Scalars['Int']['input'];
}

export interface UpdatePostInput {
  communityId?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface User {
  __typename?: 'User';
  id: Scalars['Int']['output'];
  posts: Array<Post>;
  username: Scalars['String']['output'];
}


export interface UserPostsArgs {
  authorId?: InputMaybe<Scalars['Int']['input']>;
  communityId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}

export type UserFragmentFragment = { __typename?: 'User', id: number, username: string };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: number, username: string } };

export type LoginMutationVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: number, username: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type CommunitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type CommunitiesQuery = { __typename?: 'Query', communities: Array<{ __typename?: 'Community', id: number, name: string }> };

export type PostFragmentFragment = { __typename?: 'Post', id: number, title: string, content: string, community: { __typename?: 'Community', id: number, name: string } };

export type PostsQueryVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
  communityId?: InputMaybe<Scalars['Int']['input']>;
  authorId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', commentsCount: number, id: number, title: string, content: string, author: { __typename?: 'User', username: string }, community: { __typename?: 'Community', id: number, name: string } }> };

export type OurPostsQueryVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
  communityId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type OurPostsQuery = { __typename?: 'Query', ourPosts: Array<{ __typename?: 'Post', commentsCount: number, id: number, title: string, content: string, author: { __typename?: 'User', username: string }, community: { __typename?: 'Community', id: number, name: string } }> };

export type PostQueryVariables = Exact<{
  postId: Scalars['Int']['input'];
}>;


export type PostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', updatedAt: any, id: number, title: string, content: string, community: { __typename?: 'Community', id: number, name: string } } | null };

export type CreatePostMutationVariables = Exact<{
  createPostInput: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: number } };

export type UpdatePostMutationVariables = Exact<{
  postId: Scalars['Int']['input'];
  updatePostInput: UpdatePostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: number } };

export type DeletePostMutationVariables = Exact<{
  postId: Scalars['Int']['input'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: { __typename?: 'Post', id: number } };

export const UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode;
export const PostFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"community"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode;
export const CommunitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"communities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"communities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
export const PostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"posts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"communityId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"communityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"communityId"}}},{"kind":"Argument","name":{"kind":"Name","value":"authorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postFragment"}},{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"community"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
export const OurPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ourPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"communityId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ourPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"communityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"communityId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postFragment"}},{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"community"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
export const PostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"post"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postFragment"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"community"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createPostInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createPostInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createPostInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode;
export const UpdatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updatePostInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"Argument","name":{"kind":"Name","value":"updatePostInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updatePostInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode;
export const DeletePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    me(variables?: MeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MeQuery>(MeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'me', 'query', variables);
    },
    login(variables: LoginMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginMutation>(LoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'login', 'mutation', variables);
    },
    logout(variables?: LogoutMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LogoutMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LogoutMutation>(LogoutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'logout', 'mutation', variables);
    },
    communities(variables?: CommunitiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CommunitiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CommunitiesQuery>(CommunitiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'communities', 'query', variables);
    },
    posts(variables?: PostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostsQuery>(PostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'posts', 'query', variables);
    },
    ourPosts(variables?: OurPostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<OurPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OurPostsQuery>(OurPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ourPosts', 'query', variables);
    },
    post(variables: PostQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PostQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostQuery>(PostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'post', 'query', variables);
    },
    createPost(variables: CreatePostMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreatePostMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePostMutation>(CreatePostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createPost', 'mutation', variables);
    },
    updatePost(variables: UpdatePostMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdatePostMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdatePostMutation>(UpdatePostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updatePost', 'mutation', variables);
    },
    deletePost(variables: DeletePostMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeletePostMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeletePostMutation>(DeletePostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deletePost', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;