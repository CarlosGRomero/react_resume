import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const NotFound = () => {
  return (
    <div className="NotFound">
      <Header />
      <main>
        <h2>404 - Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
