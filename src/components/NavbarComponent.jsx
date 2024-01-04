import { Navbar, NavbarBrand } from "reactstrap";

function NavbarComponent() {
  return (
    <Navbar className="my-2" color="dark" dark>
      <NavbarBrand href="/">
        <img
          alt="logo"
          src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/171_Imdb_logo_logos-512.png"
          style={{
            height: 40,
            width: 40,
          }}
        />
        Movie Actors
      </NavbarBrand>
    </Navbar>
  );
}

export default NavbarComponent;
