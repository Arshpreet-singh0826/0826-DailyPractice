import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb://sharmagungun511:gungun@ac-d3eizw0-shard-00-00.fbozsbp.mongodb.net:27017,ac-d3eizw0-shard-00-01.fbozsbp.mongodb.net:27017,ac-d3eizw0-shard-00-02.fbozsbp.mongodb.net:27017/?ssl=true&replicaSet=atlas-keok3x-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];


        
        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 