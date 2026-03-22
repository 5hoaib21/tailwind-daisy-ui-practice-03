import { Menu, X } from "lucide-react";
import Link from "../Link/Link";
import { useState } from "react";
const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = navigationData.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))

  return (
    <nav className="my-4 m-5 flex justify-between">
      <span className="flex items-center" onClick={()=>setOpen(!open)}>
      { 
        open ? 
        <X className="md:hidden"></X> :
        <Menu className="md:hidden"></Menu>
        }
        
        <ul className="md:hidden">
          {
            links
          }
        </ul>


        <h3 className="text-lg font-bold btn btn-ghost">MyDiasyUI</h3>
      </span>
      
      
      
      <ul className="md:flex hidden">
        {
          links
        }
      </ul>

      {/* <ul className='flex gap-3'>
{
  navigationData.map(route => <li><a href={route.path}>{route.name}</a></li>)
} */}
      {/* </ul> */}

      {/* <ul className='flex gap-5'>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/blog">Blog</a></li>
       </ul> */}

      <button className="btn btn-ghost">Sign In</button>
    </nav>
  );
};

export default Navbar;
