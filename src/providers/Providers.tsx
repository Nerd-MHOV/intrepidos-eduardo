"use client";

import store from "@/store/store";
import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </QueryClientProvider>
    </Provider>
  );
}
