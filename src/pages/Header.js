import React from 'react'

const Header = () => {
    return (
        <div>
            <h1>header</h1>
        </div>
    )
}

export default Header

// import React, { useState } from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
// } from "reactstrap";

// const Header = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar className="Navbar fixed-top" light expand="md">
//         <div className="container  p-2 ">
//           <NavbarBrand className="brand-icon " href="/">
//              <span className=" brand-color">A</span>bhaya
//           </NavbarBrand>
//           <NavbarToggler onClick={toggle} />
//           <Collapse isOpen={isOpen} navbar>
//             <Nav className="ms-auto  text-uppercase ms-2 " navbar>
//               <NavItem>
//                 <NavLink className="nav-link" href="/home/">
//                   home
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink className="nav-link" href="/service/">
//                   about
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink className="nav-link" href="/price/">
//                   sos
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink className="nav-link" href="/about/">
//                   rights
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink className="nav-link" href="/about/">
//                   rights
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink className="nav-link" href="/about/">
//                   NGO
//                 </NavLink>
//               </NavItem>
              
//               <NavItem>
//                 <NavLink className="nav-link" href="/contact/">
//                   contact us 
//                 </NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </div>
//       </Navbar>

     
//     </div>
//   );
// };

// export default Header;