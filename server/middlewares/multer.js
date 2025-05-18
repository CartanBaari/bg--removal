import multer from "multer";
const storage=multer.diskStorage({
    filename:function(re,file,callnack){
        callnack(null,`${date.now()}_${file.originalname}`)
    }
})
const upload=multer({storage})
export default upload;