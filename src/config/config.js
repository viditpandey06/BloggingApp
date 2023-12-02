const conf={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteDatabase:String(import.meta.env.VITE_DATABASE_URL),
    appwriteCollection:String(import.meta.env.VITE_COLLECTION_URL),
    appwriteBucket:String(import.meta.env.VITE_BUCKET_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID)    
}    
}
export default conf
