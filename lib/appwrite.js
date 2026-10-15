import { Client, Account } from 'react-native-appwrite';

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("6acf72fa002006d1f77a")
    .setPlatform("dev.tamanna.books");

const account = new Account(client);

export { client, account };