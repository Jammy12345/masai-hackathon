import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import baseUrl from "../../helpers/baseUrl";
import { useEffect, useRef } from "react";
const Product = ({ product }) => {
   console.log(product);
   const router = useRouter();
   const modalRef = useRef(null);
   const cookie = parseCookies();
   const user = cookie.user ? JSON.parse(cookie.user) : "";
   useEffect(() => {
      M.Modal.init(modalRef.current);
   }, []);
   if (router.isFallback) {
      return <h3>Loading...</h3>;
   }

   const getModal = () => {
      return (
         //   <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

         <div id="modal1" className="modal" ref={modalRef}>
            <div className="modal-content">
               <h4>{product.name}</h4>
               <p>Are you sure you want to delete this user</p>
            </div>
            <div className="modal-footer">
               <button className="btn waves-effect waves-light #c62828 blue darken-3">
                  Cancel
               </button>
               <button
                  className="btn waves-effect waves-light #c62828 red darken-3"
                  onClick={() => deleteProduct()}
               >
                  Yes
               </button>
            </div>
         </div>
      );
   };

   const deleteProduct = async () => {
      const res = await fetch(`${baseUrl}/api/products/${product._id}`, {
         method: "DELETE",
      });
      await res.json();
      router.push("/");
   };
   return (
      <div className="container center-align">
         <h3>{product.name}</h3>
         <img src={product.mediaUrl} alt="image" />
         <h5>{product.price}</h5>
         <input
            type="number"
            placeholder="Quantity"
            min="1"
            style={{ width: "400px", margin: "10px" }}
         />
         <button className="btn waves-effect waves-light #1565c0 blue darken-3 ">
            Add
            <i className="material-icons right">add</i>
         </button>

         <p className="left-align">{product.description}</p>

         {user.role != "user" && (
            <button
               data-target="modal1"
               className="btn modal-trigger waves-effect waves-light #c62828 red darken-3"
            >
               Delte
               <i className="material-icons left">delete</i>
            </button>
         )}

         {getModal()}
      </div>
   );
};

// export async function getServerSideProps({ params: { id } }) {
//    const res = await fetch(`http://localhost:3000/api/products/${id}`);
//    const data = await res.json();
//    return {
//   props: { product: data },
//    };
// }

export async function getStaticProps({ params: { id } }) {
   const res = await fetch(`${baseUrl}/api/products/${id}`);
   const data = await res.json();

   return {
      props: { product: data },
   };
}
export async function getStaticPaths() {
   return {
      paths: [
         { params: { id: "6083afe8ab2cf096196c0fad" } }, // See the "paths" section below
      ],
      fallback: true,
   };
}

export default Product;
