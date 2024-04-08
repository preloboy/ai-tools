import { Injectable } from '@angular/core';
import { Account, Client, ID } from 'appwrite';
import { environment } from '../../../environments/environment';

const client = new Client();
client
  .setEndpoint(environment.APP_ENDPOINT)
  .setProject(environment.APP_PROJECT)

const account = new Account(client)

@Injectable({
  providedIn: 'root'
})

export class AppService {

  loggedInUser: any = null;

  constructor() { }

  async login(email: string, password: string) {
    await account.createEmailPasswordSession(email, password);
    this.loggedInUser =  await account.get()
    return this.loggedInUser
  }
  
  async session(){
    await account.get();
    this.loggedInUser =  await account.get()
  }

  async register(email: string, password: string, name: string) {
    await account.create(ID.unique(), email, password, name);
    // this.login(email, password);
    console.log("Account Created", name, email, password)
  }

  async logout() {
    await account.deleteSession('current');
    // this.loggedInUser = null;
  }

}
