import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  UUID: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export type AuthTokenType = {
  __typename?: 'AuthTokenType';
  dateAdded: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  lastUpdated: Scalars['DateTime']['output'];
  token: Scalars['String']['output'];
  user: UserType;
};

export type AuthTokenTypeResponse = {
  __typename?: 'AuthTokenTypeResponse';
  data: AuthTokenType;
  message?: Maybe<Scalars['String']['output']>;
  status: ResponseStatus;
};

export type EmailPasswordSignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type EmailPasswordSignUpInput = {
  email: Scalars['String']['input'];
  password1: Scalars['String']['input'];
  password2: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  emailPasswordSignin: AuthTokenTypeResponse;
  emailPasswordSignup: NoneTypeResponse;
  updateUserProfile: ProfileTypeResponse;
};


export type MutationEmailPasswordSigninArgs = {
  input: EmailPasswordSignInInput;
};


export type MutationEmailPasswordSignupArgs = {
  input: EmailPasswordSignUpInput;
};


export type MutationUpdateUserProfileArgs = {
  input: UserProfileInput;
};

export type NoneTypeResponse = {
  __typename?: 'NoneTypeResponse';
  data?: Maybe<Scalars['Void']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: ResponseStatus;
};

export type ProfileType = {
  __typename?: 'ProfileType';
  dateAdded: Scalars['DateTime']['output'];
  faceRecognition?: Maybe<Scalars['JSON']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  lastUpdated: Scalars['DateTime']['output'];
  nin?: Maybe<Scalars['String']['output']>;
  user: UserType;
  verified: Scalars['Boolean']['output'];
};

export type ProfileTypeResponse = {
  __typename?: 'ProfileTypeResponse';
  data: ProfileType;
  message?: Maybe<Scalars['String']['output']>;
  status: ResponseStatus;
};

export type Query = {
  __typename?: 'Query';
  version: Scalars['String']['output'];
};

export enum ResponseStatus {
  Error = 'ERROR',
  Success = 'SUCCESS'
}

export type UserProfileInput = {
  faceRecognition: Scalars['JSON']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  nin: Scalars['String']['input'];
  userId: Scalars['UUID']['input'];
};

export type UserType = {
  __typename?: 'UserType';
  dateAdded: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  lastUpdated: Scalars['DateTime']['output'];
};

export type SignInMutationVariables = Exact<{
  input?: InputMaybe<EmailPasswordSignInInput>;
}>;


export type SignInMutation = { __typename?: 'Mutation', emailPasswordSignin: { __typename?: 'AuthTokenTypeResponse', message?: string | null, status: ResponseStatus, data: { __typename?: 'AuthTokenType', id: any, token: string, lastUpdated: any, dateAdded: any } } };

export type SignUpMutationVariables = Exact<{
  input?: InputMaybe<EmailPasswordSignUpInput>;
}>;


export type SignUpMutation = { __typename?: 'Mutation', emailPasswordSignup: { __typename?: 'NoneTypeResponse', message?: string | null, status: ResponseStatus, data?: any | null } };


export const SignInDocument = gql`
    mutation SignIn($input: EmailPasswordSignInInput = {email: "", password: ""}) {
  emailPasswordSignin(input: $input) {
    message
    status
    data {
      id
      token
      lastUpdated
      dateAdded
    }
  }
}
    `;

export function useSignInMutation() {
  return Urql.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument);
};
export const SignUpDocument = gql`
    mutation SignUp($input: EmailPasswordSignUpInput = {email: "", password1: "", password2: ""}) {
  emailPasswordSignup(input: $input) {
    message
    status
    data
  }
}
    `;

export function useSignUpMutation() {
  return Urql.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument);
};