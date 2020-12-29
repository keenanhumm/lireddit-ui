import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: "Query";
  me?: Maybe<User>;
  areas: UserArea[];
  area?: Maybe<UserArea>;
  performances?: Maybe<Performance[]>;
  performance?: Maybe<Performance>;
};


export type QueryAreaArgs = {
  id: Scalars["Float"];
};


export type QueryPerformancesArgs = {
  day?: Maybe<Scalars["String"]>;
};


export type QueryPerformanceArgs = {
  areaId: Scalars["Float"];
  day?: Maybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  id: Scalars["Float"];
  createdAt: Scalars["String"];
  updatedAt: Scalars["String"];
  username: Scalars["String"];
};

export type UserArea = {
  __typename?: "UserArea";
  id: Scalars["Float"];
  userId: Scalars["Float"];
  name: Scalars["String"];
  isActive: Scalars["Boolean"];
};

export type Performance = {
  __typename?: "Performance";
  id: Scalars["Float"];
  areaId: Scalars["Float"];
  userId: Scalars["Float"];
  rating: Scalars["Float"];
  day: Scalars["String"];
  createdAt: Scalars["String"];
  updatedAt: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  register: UserResponse;
  login: UserResponse;
  logout: Scalars["Boolean"];
  createUserArea: UserArea;
  updateUserArea?: Maybe<UserArea>;
  deleteUserArea: Scalars["Boolean"];
  logPerformance: Performance;
};


export type MutationRegisterArgs = {
  credentials: UserCredentials;
};


export type MutationLoginArgs = {
  credentials: UserCredentials;
};


export type MutationCreateUserAreaArgs = {
  name: Scalars["String"];
};


export type MutationUpdateUserAreaArgs = {
  isActive?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  id: Scalars["Float"];
};


export type MutationDeleteUserAreaArgs = {
  id: Scalars["Float"];
};


export type MutationLogPerformanceArgs = {
  rating: Scalars["Float"];
  areaId: Scalars["Float"];
};

export type UserResponse = {
  __typename?: "UserResponse";
  errors?: Maybe<FieldError[]>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: "FieldError";
  field: Scalars["String"];
  message: Scalars["String"];
};

export type UserCredentials = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type BaseUserFragment = (
  { __typename?: "User" }
  & Pick<User, "id" | "username">
);

export type CreateUserAreaMutationVariables = Exact<{
  name: Scalars["String"];
}>;


export type CreateUserAreaMutation = (
  { __typename?: "Mutation" }
  & {
    createUserArea: (
      { __typename?: "UserArea" }
      & Pick<UserArea, "id" | "name" | "isActive">
    ),
  }
);

export type DeleteUserAreaMutationVariables = Exact<{
  id: Scalars["Float"];
}>;


export type DeleteUserAreaMutation = (
  { __typename?: "Mutation" }
  & Pick<Mutation, "deleteUserArea">
);

export type LogPerformanceMutationVariables = Exact<{
  areaId: Scalars["Float"];
  rating: Scalars["Float"];
}>;


export type LogPerformanceMutation = (
  { __typename?: "Mutation" }
  & {
    logPerformance: (
      { __typename?: "Performance" }
      & Pick<Performance, "id" | "areaId" | "rating" | "day">
    ),
  }
);

export type LoginUserMutationVariables = Exact<{
  username: Scalars["String"];
  password: Scalars["String"];
}>;


export type LoginUserMutation = (
  { __typename?: "Mutation" }
  & {
    login: (
      { __typename?: "UserResponse" }
      & {
        errors?: Maybe<(
          { __typename?: "FieldError" }
          & Pick<FieldError, "field" | "message">
        )[]>, user?: Maybe<(
          { __typename?: "User" }
          & BaseUserFragment
        )>,
      }
    ),
  }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: "Mutation" }
  & Pick<Mutation, "logout">
);

export type RegisterMutationVariables = Exact<{
  username: Scalars["String"];
  password: Scalars["String"];
}>;


export type RegisterMutation = (
  { __typename?: "Mutation" }
  & {
    register: (
      { __typename?: "UserResponse" }
      & {
        errors?: Maybe<(
          { __typename?: "FieldError" }
          & Pick<FieldError, "field" | "message">
        )[]>, user?: Maybe<(
          { __typename?: "User" }
          & BaseUserFragment
        )>,
      }
    ),
  }
);

export type UpdateUserAreaMutationVariables = Exact<{
  id: Scalars["Float"];
  name?: Maybe<Scalars["String"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
}>;


export type UpdateUserAreaMutation = (
  { __typename?: "Mutation" }
  & {
    updateUserArea?: Maybe<(
      { __typename?: "UserArea" }
      & Pick<UserArea, "id" | "name" | "isActive">
    )>,
  }
);

export type AreaQueryVariables = Exact<{
  id: Scalars["Float"];
}>;


export type AreaQuery = (
  { __typename?: "Query" }
  & {
    area?: Maybe<(
      { __typename?: "UserArea" }
      & Pick<UserArea, "id" | "name" | "isActive">
    )>,
  }
);

export type AreasQueryVariables = Exact<{ [key: string]: never; }>;


export type AreasQuery = (
  { __typename?: "Query" }
  & {
    areas: (
      { __typename?: "UserArea" }
      & Pick<UserArea, "id" | "name" | "isActive">
    )[],
  }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: "Query" }
  & {
    me?: Maybe<(
      { __typename?: "User" }
      & BaseUserFragment
    )>,
  }
);

export type PerformanceQueryVariables = Exact<{
  areaId: Scalars["Float"];
  day?: Maybe<Scalars["String"]>;
}>;


export type PerformanceQuery = (
  { __typename?: "Query" }
  & {
    performance?: Maybe<(
      { __typename?: "Performance" }
      & Pick<Performance, "id" | "day" | "areaId" | "rating">
    )>,
  }
);

export type PerformancesQueryVariables = Exact<{
  day?: Maybe<Scalars["String"]>;
}>;


export type PerformancesQuery = (
  { __typename?: "Query" }
  & {
    performances?: Maybe<(
      { __typename?: "Performance" }
      & Pick<Performance, "id" | "day" | "areaId" | "rating">
    )[]>,
  }
);

export const BaseUserFragmentDoc = gql`
    fragment BaseUser on User {
  id
  username
}
    `;
export const CreateUserAreaDocument = gql`
    mutation CreateUserArea($name: String!) {
  createUserArea(name: $name) {
    id
    name
    isActive
  }
}
    `;

export function useCreateUserAreaMutation() {
  return Urql.useMutation<CreateUserAreaMutation, CreateUserAreaMutationVariables>(CreateUserAreaDocument);
}
export const DeleteUserAreaDocument = gql`
    mutation DeleteUserArea($id: Float!) {
  deleteUserArea(id: $id)
}
    `;

export function useDeleteUserAreaMutation() {
  return Urql.useMutation<DeleteUserAreaMutation, DeleteUserAreaMutationVariables>(DeleteUserAreaDocument);
}
export const LogPerformanceDocument = gql`
    mutation LogPerformance($areaId: Float!, $rating: Float!) {
  logPerformance(areaId: $areaId, rating: $rating) {
    id
    areaId
    rating
    day
  }
}
    `;

export function useLogPerformanceMutation() {
  return Urql.useMutation<LogPerformanceMutation, LogPerformanceMutationVariables>(LogPerformanceDocument);
}
export const LoginUserDocument = gql`
    mutation LoginUser($username: String!, $password: String!) {
  login(credentials: {username: $username, password: $password}) {
    errors {
      field
      message
    }
    user {
      ...BaseUser
    }
  }
}
    ${BaseUserFragmentDoc}`;

export function useLoginUserMutation() {
  return Urql.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument);
}
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
}
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!) {
  register(credentials: {username: $username, password: $password}) {
    errors {
      field
      message
    }
    user {
      ...BaseUser
    }
  }
}
    ${BaseUserFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
}
export const UpdateUserAreaDocument = gql`
    mutation updateUserArea($id: Float!, $name: String, $isActive: Boolean) {
  updateUserArea(id: $id, name: $name, isActive: $isActive) {
    id
    name
    isActive
  }
}
    `;

export function useUpdateUserAreaMutation() {
  return Urql.useMutation<UpdateUserAreaMutation, UpdateUserAreaMutationVariables>(UpdateUserAreaDocument);
}
export const AreaDocument = gql`
    query Area($id: Float!) {
  area(id: $id) {
    id
    name
    isActive
  }
}
    `;

export function useAreaQuery(options: Omit<Urql.UseQueryArgs<AreaQueryVariables>, "query"> = {}) {
  return Urql.useQuery<AreaQuery>({ query: AreaDocument, ...options });
}
export const AreasDocument = gql`
    query Areas {
  areas {
    id
    name
    isActive
  }
}
    `;

export function useAreasQuery(options: Omit<Urql.UseQueryArgs<AreasQueryVariables>, "query"> = {}) {
  return Urql.useQuery<AreasQuery>({ query: AreasDocument, ...options });
}
export const MeDocument = gql`
    query Me {
  me {
    ...BaseUser
  }
}
    ${BaseUserFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, "query"> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
}
export const PerformanceDocument = gql`
    query Performance($areaId: Float!, $day: String) {
  performance(areaId: $areaId, day: $day) {
    id
    day
    areaId
    rating
  }
}
    `;

export function usePerformanceQuery(options: Omit<Urql.UseQueryArgs<PerformanceQueryVariables>, "query"> = {}) {
  return Urql.useQuery<PerformanceQuery>({ query: PerformanceDocument, ...options });
}
export const PerformancesDocument = gql`
    query Performances($day: String) {
  performances(day: $day) {
    id
    day
    areaId
    rating
  }
}
    `;

export function usePerformancesQuery(options: Omit<Urql.UseQueryArgs<PerformancesQueryVariables>, "query"> = {}) {
  return Urql.useQuery<PerformancesQuery>({ query: PerformancesDocument, ...options });
}