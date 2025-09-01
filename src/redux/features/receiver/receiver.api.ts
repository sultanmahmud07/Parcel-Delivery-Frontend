import { baseApi } from "@/redux/baseApi";

export const receiverApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getReceiver: builder.query({
                  query: (params) => ({
                        url: "/user/all-receiver",
                        method: "GET",
                        params,
                  })
            }),
      }),
});

export const {
      useGetReceiverQuery,
} = receiverApi;
