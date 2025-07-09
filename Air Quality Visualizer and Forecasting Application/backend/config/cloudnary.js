import { v2 as cloudinary } from "cloudinary";

const connectCloudnary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret: process.env.CLOUDNARY_SECRET_KEY,
  });
};

export default connectCloudnary