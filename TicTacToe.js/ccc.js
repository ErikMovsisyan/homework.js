class storageProvider {
    constructor(){
        if (typeof this.upload !== 'function' || typeof this.download !== 'function') {
            throw new Error("storageProvider is an abstract class");
        }
    }
   
}
class localStorageProvider extends storageProvider {
    constructor() {
        super();
    }
 upload(file) {
        console.log("uploading")
    }
    download(download){
        console.log("downloading");
        
    }  
}
class CloudStorageProvider extends storageProvider {
    constructor() {
        super()
    }
     upload(file) {
        console.log("uploading")
    }
    download(download){
        console.log("downloading");
        
    }  
}
let b = new CloudStorageProvider();
console.log(b.download())


