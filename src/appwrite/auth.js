import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService{

    client = new Client();
    account;
    userId;
    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)
         this.account = new Account(this.client);   
    }   
    
    async createAccount ({email, password, name}){
        try {
       const userAccount =     await this.account.create(ID.unique(),email,name)
       if (userAccount) {
        //call another method
        this.login({email,password})
       } else {
            return userAccount;          
       }    
    } catch (error) {
            console.error();
            throw error;
        }
    }
    async createMessageLoginUser (phone_no){
      try {
        const userAccount = await this.account.createPhoneSession(ID.unique(),String(phone_no))
        this.userId = userAccount.userId;
        //return userAccount;
        return this.userId
      } catch (error) {
       console.error();
        throw error
      }
    }
    async MessageLogin(phone_no){
        try {
        const userId =   createMessageLoginUser(phone_no);

          return await this.account.updatePhoneSession(userId,String(code));
        } catch (error) {
          console.error();
          throw error;
        }
    } 
    async login(email,password){
        try {
          return  await this. account. createEmailSession(email, password)
        } catch (error) {
            console.error();
            throw error;
        }
    }
    async getCurrentUser(){
        try {
           const currentUser= await this.account.get();
           if(currentUser){
               return currentUser
           }
           else{
            return null;
           }
        } catch (error) {
            console.error();
            throw error;
        }
        return null;
    }
    async logout(){
        try {
            await  this.account.deleteSession();
        } catch (error) {
            console.error();
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService
