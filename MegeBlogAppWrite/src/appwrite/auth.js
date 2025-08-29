import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class Authservice {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        // wait for login before returning
        return await this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("Failed to create account:", error.message);
      throw error;
    }
  }
  


  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
      return null; // ensure consistent return
    }
  }
  

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

const authService = new Authservice();

export default authService;