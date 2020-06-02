import React from "react";
// import Navbar from "react-bootstrap/Navbar";

function Navtab() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="nav-tab">
      <a className="navbar-brand" href="www.">
        H.A.
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="www.">
              ME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.">
              WORK
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navtab;

//Tindog simple
// function NavTab() {
//   return (
//     <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
//       <a className="navbar-brand" href="www.">
//         H.A.
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item">
//             <a className="nav-link" href="www.">
//               ME
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="www.">
//               WORK
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="www.">
//               CONTACT
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default NavTab;

//Bootstrap-React
// {
//   /* <Navbar>
//       <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
//       <Navbar.Toggle />
//       <Navbar.Collapse classNameNameName="justify-content-end">
//         <Navbar.Text>
//           Signed in as: <a href="#login">Mark Otto</a>
//         </Navbar.Text>
//       </Navbar.Collapse>
//     </Navbar> */
// }

//From TinDog- Bootstrap Nav
//  <nav classNameName="navbar navbar-expand-lg navbar-dark">
//    <a classNameName="navbar-brand" href="">
//      tindog
//    </a>
//    <button
//      classNameName="navbar-toggler"
//      type="button"
//      data-toggle="collapse"
//      data-target="#navbarSupportedContent"
//      aria-controls="navbarSupportedContent"
//      aria-expanded="false"
//      aria-label="Toggle navigation"
//    >
//      <span classNameName="navbar-toggler-icon"></span>
//    </button>
//    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
//      <ul classNameName="navbar-nav ml-auto">
//        <li classNameName="nav-item">
//          <a classNameName="nav-link" href="#footer">
//            Contact
//          </a>
//        </li>
//        <li classNameName="nav-item">
//          <a classNameName="nav-link" href="#pricing">
//            Pricing
//          </a>
//        </li>
//        <li classNameName="nav-item">
//          <a classNameName="nav-link" href="#cta">
//            Download
//          </a>
//        </li>
//      </ul>
//    </div>
//  </nav>;

//import { Flex, Box, Text, Link } from "rebass";
//function Navbar() {
//   return (
//     <Flex px={2} color="white" bg="black" alignItems="center">
//       <Text p={2} fontWeight="bold">
//         Rebass
//       </Text>
//       <Box mx="auto" />
//       <Link variant="nav" href="#!">
//         Profile
//       </Link>
//     </Flex>
//   );
// }

// export default Navbar;
