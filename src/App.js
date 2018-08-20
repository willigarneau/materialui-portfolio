import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './main/i18n';
import AppRouter from './main/navigation/Router';

// Font awesome imports

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AppRouter />
    </I18nextProvider>

  );
}

export default App;
