module.exports={
    returnResult:(res,statusCode,success,data)=>{
        res.status(statusCode).json({
            success: success,
            data: data
          });
    }
}