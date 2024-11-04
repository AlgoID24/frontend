import { gql } from "urql";

export const SIGN_IN = gql`
  mutation SignIn(
    $input: EmailPasswordSignInInput = { email: "", password: "" }
  ) {
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

export const SIGN_UP = gql`
  mutation SignUp(
    $input: EmailPasswordSignUpInput = {
      email: ""
      password1: ""
      password2: ""
    }
  ) {
    emailPasswordSignup(input: $input) {
      message
      status
      data
    }
  }
`;
