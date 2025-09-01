import { baseApi } from "@/redux/baseApi";

export const senderApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getSender: builder.query({
                  query: (params) => ({
                        url: "/user/all-sender",
                        method: "GET",
                        params,
                  }),
            }),
      }),
});

export const {
      useGetSenderQuery,
} = senderApi;
