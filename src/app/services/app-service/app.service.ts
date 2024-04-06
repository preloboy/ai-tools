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

  constructor() { }

  // email: string = '';
  // password: string = '';
  // name: string = '';

  async login(email: string, password: string) {
    await account.createEmailPasswordSession(email, password);
    // this.loggedInUser = await account.get();
  }

  async register(email: string, password: string, name: string) {
    await account.create("100", email, password, name);
    // this.login(email, password);
    console.log(name, email, password)
  }

  async logout() {
    await account.deleteSession('current');
    // this.loggedInUser = null;
  }

  isLoggedIn(): boolean {
    return account.get() !== null;
  }

  createAccount(email: string, password: string, name: string | undefined) {
    return account.create(ID.unique(), email, password, name)
  }

  getSession() {
    return account.getSession('current')
  }

  createEmailSession(email: string, password: string) {
    return account.createEmailPasswordSession(email, password)
  }

  deleteSession(sessionId: string) {
    return account.deleteSession(sessionId)
  }

}
