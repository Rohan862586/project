
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {data} from '../model/model'

export const newApi = createApi({
  reducerPath: "newApi",
  baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API}),
  tagTypes: ['data'],
  endpoints: (builder) => ({

    contacts: builder.query<data[], void> ({
      query: () => '/customer',
      providesTags: ['data']
    }),

    addContact: builder.mutation<void, data> ({
      query: val => ({
        url: '/customer',
        method: 'POST',
        body: val
      }),
      invalidatesTags: ['data']
    }),

    updateContact: builder.mutation<void, data>({
      query: ({id, ...rest}) => ({
        url: `/customer/${id}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['data']
    }),

    deleteContact: builder.mutation<void, string> ({
      query: (id) => ({
        url: `/customer/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['data']
    })

  })
})


export const {  useContactsQuery,
                useAddContactMutation,
                useUpdateContactMutation,
                useDeleteContactMutation
} = newApi


