import React from "react";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

const Header = () => {
  return (
    <>  
       <nav class="navbar navbar-expand-lg bg-success font-weight-bold "><LibraryBooksIcon color="dark" fontSize="large"/><h2 className="text-white">Evernote</h2></nav>
    </>  
  );
};
export default Header;