import config from "../config/config";
import { Client, ID, Databases, Storage, Query, Account } from "appwrite";
export class databaseService {
  client = new Client();
  databases;
  storage;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      const post = await this.databases(
        config.appwriteDatabase,
        config.appwriteCollection,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
      if (post) {
        return post;
      } else {
        return null;
      }
    } catch (error) {
      console.error();
      throw error;
    }
  }
  t;
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      const update = await this.databases.updateDocument(
        config.appwriteDatabase,
        config.appwriteCollection,
        slug, //document id to be edited
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
      if (update) {
        return update;
      } else {
        return null;
      }
    } catch (error) {
      console.error();
      throw error;
    }
  }
  async deletePost(slug) {
    try {
      const delPost = await this.databases.deleteDocument(
        config.appwriteDatabase,
        config.appwriteCollection,
        slug
      );
      if (delPost) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error();
      throw error;
    }
  }
  async getPost(slug) {
    try {
      const getsPost = await this.databases.deleteDocument(
        config.appwriteDatabase,
        config.appwriteCollection,
        slug
      );
      if (getsPost) {
        return getsPost;
      } else {
        return null;
      }
    } catch (error) {
      console.error();
      throw error;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabase,
        config.appwriteCollection,
        queries
      );
    } catch (error) {
      console.error();
      throw error;
    }
  }
  // Services for file upload
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(config.appwriteBucket, ID.unique());
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appwriteBucket, fileId);
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async getFilePreview(fileId){
    return await this.bucket.getFilePreview(config.appwriteBucketId,fileId)
  }
}
const service = new databaseService();
export default service;
