import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Paths } from '~/constants';
import { MainPage } from '~/pages';
import { GlobalStyle, theme } from '~/styles';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes>
      <Route path={Paths.Main} element={<MainPage />} />
    </Routes>
  </ThemeProvider>
);

export default App;
