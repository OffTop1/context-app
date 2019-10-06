import React from 'react';
import PageContent from './PageContent';
import Navbar from "./Navbar";
import Form from './Form';
import {ThemeProvider} from "./contexts/PageContext";
import {LanguageProvider} from "./contexts/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
