import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ServerError = () => {
  return (
    <div className="ServerError">
      <Header />
      <main>
        <h2>500 - Server Error</h2>
        <p>Oops! Something went wrong on our end. Please try again later.</p>
      </main>
      <Footer />
    </div>
  );
}

export default ServerError;
