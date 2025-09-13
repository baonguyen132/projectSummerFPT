import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './sidebar.module.scss';

function Sidebar() {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  // Tạo breadcrumb từ pathname
const getBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter(x => x);

    // Nếu chỉ là dashboard thì không hiển thị breadcrumb nào thêm
    if (pathnames.length === 1 && pathnames[0].toLowerCase() === 'dashboard') {
        return [];
    }

    return pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        // Capitalize first letter
        const displayName = name.charAt(0).toUpperCase() + name.slice(1);

        return {
            name: displayName,
            path: routeTo,
            isLast
        };
    }).filter(crumb => crumb.name.toLowerCase() !== 'dashboard'); // Loại bỏ 'admin' khỏi breadcrumb
};

  const breadcrumbs = getBreadcrumbs();

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className={styles.sidebar}>
      {/* Breadcrumb Navigation - Left Side */}
      <div className={styles.breadcrumbSection}>
        <nav className={styles.breadcrumb}>
          <Link to="/" className={styles.breadcrumbItem}>
            <i className="bx bx-home"></i>
            Dashboard
          </Link>
          
          {breadcrumbs.length > 0 && (
            <>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <span className={styles.separator}>
                    <i className="bx bx-chevron-right"></i>
                  </span>
                  {crumb.isLast ? (
                    <span className={styles.breadcrumbCurrent}>
                      {crumb.name}
                    </span>
                  ) : (
                    <Link to={crumb.path} className={styles.breadcrumbItem}>
                      {crumb.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </>
          )}
        </nav>
      </div>

      {/* Search Section - Right Side */}
      <div className={styles.searchSection}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <div className={styles.searchInputWrapper}>
            <i className="bx bx-search"></i>
            <input
              type="text"
              placeholder="Search anything..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            {searchTerm && (
              <button 
                type="button" 
                onClick={() => setSearchTerm('')}
                className={styles.clearButton}
              >
                <i className="bx bx-x"></i>
              </button>
            )}
          </div>
          <button type="submit" className={styles.searchButton}>
            <i className="bx bx-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sidebar;
