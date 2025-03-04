import { GraphQLClientSingleton } from 'app/graphql'
import { customerName } from 'app/graphql/queries/customerName'
import { cookies } from 'next/headers'

export const validateAccessToken = async () => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  
  if (!accessToken) {
    console.error("❌ Error: customerAccessToken is missing or null.");
    return;
  }
  
  const { customer } = await graphqlClient.request(customerName, {
    customerAccessToken: accessToken
  })
  return customer
}