import React, { lazy, Suspense } from 'react';

import { Routes as Switch, Route } from 'react-router-dom';

import LoadingFullScreen from '~/components/LoadingFullScreen';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Modal from '~/components/Modal';
import ProductModal from '~/components/ProductModal';
import FloatingButton from '~/components/FloatingButton';

const Home = lazy(() => import('../pages/Home'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));

export default function Routes() {
  return (
    <Suspense fallback={<LoadingFullScreen />}>
      <Header />

      <Switch>

        <Route index element={<Home />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />

      </Switch>

      <Footer />
      <Modal />
      <ProductModal />
      <FloatingButton />
    </Suspense>
  );
}
