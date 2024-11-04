import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://backend-production-c65d.up.railway.app/graphql",
  documents: "src/services/graphql/requests/**/*.ts",
  generates: {
    "src/services/graphql/generated.tsx": {
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
    },
  },
};

export default config;
