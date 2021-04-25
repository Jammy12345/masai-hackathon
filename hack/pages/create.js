import Link from "next/link";
import { useState } from "react";
import baseUrl from "../helpers/baseUrl";

import { parseCookies } from "nookies";
const create = () => {
   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [media, setMedia] = useState("");
   const [description, setDescription] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const mediaUrl = await imageUpload();
         const res = await fetch(`${baseUrl}/api/products`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               name,
               price,
               mediaUrl,
               description,
            }),
         });
         const res2 = await res.json();
         if (res2.error) {
            M.toast({ html: res2.error, classes: "red" });
         } else {
            M.toast({ html: "Product saved", classes: "green" });
         }
      } catch (error) {
         res.status(500).json({ error: "Internal server error" });
         console.log(error);
      }
   };

   const imageUpload = async () => {
      // https://api.cloudinary.com/v1_1/n8900
      const data = new FormData();
      data.append("file", media);
      data.append("upload_preset", "mystore");
      data.append("cloud_name", "n8900");
      const res = await fetch(
         "https://api.cloudinary.com/v1_1/n8900/image/upload",
         {
            method: "POST",
            body: data,
         }
      );
      const res2 = await res.json();
      // console.log(res2);
      return res2.url;
   };
   return (
      <form className="container" onSubmit={(e) => handleSubmit(e)}>
         <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <input
            type="text"
            name="name"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
         />
         <div className="file-field input-field">
            <div className="btn">
               <span>File</span>
               <input
                  type="file"
                  onChange={(e) => setMedia(e.target.files[0])}
                  accept="image/*"
               />
            </div>
            <div className="file-path-wrapper">
               <input
                  className="file-path validate"
                  type="text"
                  placeholder="Upload one or more files"
               />
            </div>
         </div>
         <img
            className="responsive-img"
            src={media ? URL.createObjectURL(media) : ""}
            alt=""
         />
         <textarea
            name="description"
            value={description}
            cols="30"
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
            className="materialize-textarea"
            placeholder="Description"
         ></textarea>
         <button className="btn waves-effect waves-light" type="submit">
            Submit
            <i className="material-icons right">send</i>
         </button>
      </form>
   );
};

export async function getServerSideProps(ctx) {
   const cookie = parseCookies(ctx);
   const user = cookie.user ? JSON.parse(cookie.user) : "";
   if (user.role != "admin") {
      const { res } = ctx;
      res.writeHead(302, { location: "/" });
      res.end();
   }
   return {
      props: {},
   };
}
export default create;
