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
