import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query, Permission, Role } from "appwrite";

export class Service{
    client = new Client()
    databases;
    storage;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
        )
        } catch (err) {
            throw err
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, 
                    content, 
                    featuredImage, 
                    status
                }
            )
        } catch (err) {
            throw err
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            //return true
        } catch (err) {
            throw err
            //return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (err) {
            throw err
        }
    }

    async getPosts(queries=[Query.equal("status", "Active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (err) {
            throw err
            //return false
        }
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
                [Permission.read(Role.any())]
            )
        } catch (err) {
            throw err
            //return fasle
        }
    }

    async deleteFile(fileId){
        try {
            return await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (err) {
            throw err
            //return fasle
        }
    }

    getFilePreview(fileId){
        try {
            return this.storage.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        } catch (err) {
            throw err
            //return fasle
        }
    }

    getFileView(fileId){
        try {
            return this.storage.getFileView(
                conf.appwriteBucketId,
                fileId
            )
        } catch (err) {
            throw err
            //return fasle
        }
    }

}

const service = new Service()
export default service