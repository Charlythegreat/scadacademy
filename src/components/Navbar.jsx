import React from 'react'; import { Link } from 'react-router-dom';
const Navbar = () => (<nav><Link to='/'>Accueil</Link> | <Link to='/certificate'>Certificat</Link> | <Link to='/login'>Se déconnecter</Link></nav>);
export default Navbar;