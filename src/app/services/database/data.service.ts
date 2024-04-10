import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Client, Databases } from 'appwrite';

const client = new Client();
client
  .setEndpoint(environment.APP_ENDPOINT)
  .setProject(environment.APP_PROJECT)

const database = new Databases(client)

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  
  async listDocuments(databaseId: string, collectionId: string) {
    try {
      return await database.listDocuments(databaseId, collectionId);
    } catch (error) {
      console.log("Error listing", error)
      throw error
    }
  }

  async getDocument(databaseId: string, collectionId: string, documentId: string) {
    await database.getDocument(databaseId, collectionId, documentId)
  }

  async createDocument(databaseId: string, collectionId: string, documentId: string, data: []) {
    await database.createDocument(databaseId, collectionId, documentId, data)
  }

}
