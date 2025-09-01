import { baseApi } from "@/redux/baseApi";
import { IResponse, } from "@/types";
import { IParcel } from "@/types/parcel.type";

export const parcelApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            addParcel: builder.mutation({
                  query: (parcelData) => ({
                        url: "/parcel/create",
                        method: "POST",
                        data: parcelData,
                  }),
                  invalidatesTags: ["PARCEL"],
            }),
            removeParcel: builder.mutation({
                  query: (parcelId) => ({
                        url: `/parcel/${parcelId}`,
                        method: "DELETE",
                  }),
                  invalidatesTags: ["PARCEL"],
            }),
            getParcelBySender: builder.query({
                  query: (params) => ({
                        url: "/parcel/sender",
                        method: "GET",
                        params,
                  }),
                  providesTags: ["PARCEL"],
                  transformResponse: (response) => response.data,
            }),
            getAllParcels: builder.query<IParcel[], unknown>({
                  query: (params) => ({
                        url: "/parcel/all-parcel",
                        method: "GET",
                        params: params,
                  }),
                  providesTags: ["PARCEL"],
                  transformResponse: (response: IResponse<IParcel[]>) => response.data,
            }),
      }),
});

export const {
      useAddParcelMutation,
      useRemoveParcelMutation,
      useGetParcelBySenderQuery,
      useGetAllParcelsQuery,
} = parcelApi;
