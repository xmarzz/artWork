// import nextConnect from 'next-connect'
// import { NextApiRequest, NextApiResponse } from 'next'
// import { v2 as cloudinary } from 'cloudinary' 


// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET ,

// })

// const handler = nextConnect<NextApiRequest, NextApiResponse>();

// handler.post(async(req : NextApiRequest, res : NextApiResponse)=>{
//     const fileStr= req.body.data;
//     try{
//         const uploadedResponse = await cloudinary.uploader(fileStr, {
//             "width": 864,
//             "height": 576,
//             "format": "jpg",
//             "resource_type": "image",
//         })
//     }
// })






