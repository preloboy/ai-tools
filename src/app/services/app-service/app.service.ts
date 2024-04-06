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
