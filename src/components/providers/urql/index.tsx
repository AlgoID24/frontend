"use client";

import React from "react";
import { cacheExchange, Client, fetchExchange, Provider } from "urql";
import authExchange from "./authExchange";

interface Props {
  children?: React.ReactNode;
}

const BACKEND_GRAPHQL_URL = process.env.NEXT_PUBLIC_BACKEND_GRAPHQL_URL ?? "";

const client = new Client({
  url: BACKEND_GRAPHQL_URL,
  exchanges: [cacheExchange, authExchange, fetchExchange],
});

const URQLProvider: React.FC<Props> = ({ children }) => {
  return <Provider value={client}>{children}</Provider>;
};

export default URQLProvider;
