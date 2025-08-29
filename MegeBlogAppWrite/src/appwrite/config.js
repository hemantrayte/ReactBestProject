// import { Client,ID, Databases, Storage,Query } from "appwrite";
// import conf from "../conf/conf";

// export class Service{
//   client = new Client();
//   databases;
//   bucket;

//   constructor() {
//     this.client
//     .setEndpoint(conf.appwriteUrl)
//     .setProject(conf.appwriteProjectId);
//     this.databases = new Databases(this.client);
//     this.bucket = new Storage(this.client);
//   }

//   async createPost({title, slug, content, featuredImage, status, userId}){
//     try {
//       return await this.databases.createDocument(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         slug,
//         {
//           title,
//           content,
//           featuredImage,
//           status,
//           userId
//         }
//        )
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   async updatePost(slug, {title,content, featuredImage, status}) {
//     try {
//       return await this.databases.updateDocument(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         slug,
//         {
//           title,
//           content,
//           featuredImage,
//           status
//         }
//       )
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async deletePost(slug){
//     try {
//       await this.databases.deleteDocument(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         slug
//       )
//       return true;
//     } catch (error) {
//       console.log(error);
//       return false;
//     }
//   }

//   async getPost(slug){
//     try {
//       return await this.databases.getDocument(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         slug
//       )
//     } catch (error) {
//       console.log("error from get post 72", error);
//     }
//   }

//   async getPosts(queries = [Query.equal("status", "active")]) {
//     try {
//       return await this.databases.listDocuments(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         queries,
//       )
//     } catch (error) {
//       console.log("come from 84", error);
//     }
//   }

//   //file upload service
//   async uploadFile(file){
//     try {
//       return await this.bucket.createFile(
//         conf.appwriteBucketId,
//         ID.unique,
//         file
//       )
//     } catch (error) {
//       console.log(error);
//       return false
//     }
//   }

//   //delete file 
//   async deleteFile(fileId){
//     try {
//       await this.bucket.deleteFile(
//         conf.appwriteBucketId,
//         fileId
//       )
//       return true
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   getFilePreview(fileId){
//     return this.bucket.getFilePreview(
//       conf.appwriteBucketId,
//       fileId
//     )
//   }
// }

// const service = new Service();
// export default service


import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("Error in createPost:", error);
      return null;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log("Error in updatePost:", error);
      return null;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Error in deletePost:", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Error in getPost:", error);
      return null;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Error in getPosts:", error);
      return { documents: [] };
    }
  }

  // file upload
  async uploadFile(file) {
    try {
      const uploadedFile = await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(), // ✅ fixed
        file
      );
      return uploadedFile;
    } catch (error) {
      console.log("Error in uploadFile:", error);
      return null;
    }
  }

  // delete file
  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Error in deleteFile:", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.storage.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();
export default service;
