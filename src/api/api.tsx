
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Data} from '../model/model'

export const newApi = createApi({
  reducerPath: "newApi",
  baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API}),
  tagTypes: ['Data'],
  endpoints: (builder) => ({

    contacts: builder.query<Data[], void> ({
      query: () => '/customer',
      providesTags: ['Data']
    }),

    addContact: builder.mutation<void, Data> ({
      query: val => ({
        url: '/customer',
        method: 'POST',
        body: val
      }),
      invalidatesTags: ['Data']
    }),

    updateContact: builder.mutation<void, Data>({
      query: ({id, ...rest}) => ({
        url: `/customer/${id}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['Data']
    }),

    deleteContact: builder.mutation<void, string> ({
      query: (id) => ({
        url: `/customer/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Data']
    })

  })
})


export const {  useContactsQuery,
                useAddContactMutation,
                useUpdateContactMutation,
                useDeleteContactMutation
} = newApi


