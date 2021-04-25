import Link from "next/link";
import { useRouter } from "next/router";

import { parseCookies } from "nookies";

import cookie from "js-cookie";
export const Navbar = () => {
   const router = useRouter();

   const cookieuser = parseCookies();
   const user = cookieuser.user ? JSON.parse(cookieuser.user) : "";

   const isActive = (route) => {
      if (route == router.pathname) {
         return "active";
      } else "";
   };
   return (
      <>
         <nav>
            <div className="nav-wrapper #1565c0 blue darken-3 ">
               <Link href="/">
                  <a className="brand-logo left">My gym</a>
               </Link>
               <ul id="nav-mobile" className="right ">
                  {(user.role == "admin" || user.role == "root") && (
                     <li className={isActive("/create")}>
                        <Link href="/create">
                           <a>create</a>
                        </Link>
                     </li>
                  )}
                  {user ? (
                     <>
                        <li className={isActive("/account")}>
                           <Link href="/account">
                              <a>Account</a>
                           </Link>
                        </li>
                        <li className={isActive("/signup")}>
                           <button
                              className="btn red"
                              onClick={() => {
                                 cookie.remove("token");
                                 cookie.remove("user");
                                 router.push("/login");
                              }}
                           >
                              Logout
                           </button>
                        </li>
                     </>
                  ) : (
                     <>
                        <li className={isActive("/login")}>
                           <Link href="/login">
                              <a>Login</a>
                           </Link>
                        </li>
                        <li className={isActive("/signup")}>
                           <Link href="/signup">
                              <a>Signup</a>
                           </Link>
                        </li>
                     </>
                  )}
               </ul>
            </div>
         </nav>
      </>
   );
};
export default Navbar;
