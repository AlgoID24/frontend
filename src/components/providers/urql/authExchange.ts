import { clearAuthTokens, getAuthTokens } from "@/lib/utils/localStorage";
import { authExchange } from "@urql/exchange-auth";

const customAuthExchange = authExchange(async (utils) => {
  return {
    addAuthToOperation(operation) {
      const authTokens = getAuthTokens();
      if (authTokens?.token === undefined || !(authTokens.token.length > 1)) {
        return operation;
      }
      return utils.appendHeaders(operation, {
        Authorization: `Bearer ${authTokens.token}`,
      });
    },
    didAuthError(error, _operation) {
      if (
        error.graphQLErrors.some(
          (value) => value.message === "Invalid refresh_token",
        )
      ) {
        clearAuthTokens();
        window.location.replace("/signin");
      }
      return error.graphQLErrors.some(
        (value) =>
          value.message === "Signature has expired" ||
          value.message.includes("You must be authenticated"),
      );
    },
    async refreshAuth() {},
  };
});

export default customAuthExchange;
