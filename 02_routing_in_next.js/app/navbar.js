import Link from 'next/link';

const navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-around', 
      alignItems: 'center', 
      padding: '1rem', 
      backgroundColor: 'ff5733' 
    }}>
      <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
        <Link href="/">
          MySite
        </Link>
      </div>
      <ul style={{ 
        display: 'flex', 
        listStyle: 'none', 
        gap: '2rem', 
        margin: 0, 
        padding: 0 
      }}>
        <li style={{ color: '#fff', cursor: 'pointer' }}>
          <Link href="/about">
            About
          </Link>
        </li>
        <li style={{ color: '#fff', cursor: 'pointer' }}>
          <Link href="/services">
            Services
          </Link>
        </li>
        <li style={{ color: '#fff', cursor: 'pointer' }}>
          <Link href="/contact">
            Contact
          </Link>
        </li>
        <li style={{ color: '#fff', cursor: 'pointer' }}>
          <Link href="/blogs">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;