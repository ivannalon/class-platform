import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o0tbnm02sl01z284ljdkt9/master",
  cache: new InMemoryCache()
})