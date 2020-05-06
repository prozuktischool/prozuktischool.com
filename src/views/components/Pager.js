import React from 'react';
import { Link } from 'gatsby';

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        {previousPagePath && (
          <Link to={previousPagePath}>
            <button>← নতুন লেখা</button>
          </Link>
        )}
      </div>

      <div style={{ justifySelf: 'flex-end' }}>
        {nextPagePath && (
          <Link to={nextPagePath}>
            <button>আগের লেখা →</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Pager;
