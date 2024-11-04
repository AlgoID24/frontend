"use client";

import React from "react";
import { cacheExchange, Client, fetchExchange, Provider } from "urql";

interface Props {
  children?: React.ReactNode;
}

const BACKEND_GRAPHQL_URL = process.env.NEXT_PUBLIC_BACKEND_GRAPHQL_URL ?? "";

const client = new Client({
  url: BACKEND_GRAPHQL_URL,
  exchanges: [cacheExchange, fetchExchange],
});

const URQLProvider: React.FC<Props> = ({ children }) => {
  return <Provider value={client}>{children}</Provider>;
};

export default URQLProvider;
