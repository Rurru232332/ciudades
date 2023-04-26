import MainLayout from './pages/MainLayout/MainLayout';
import React from 'react';
import { ThemeProvider } from './providers/ThemeProvider';
import { HistoryProvider } from './providers/HistoryProvider';
import './App.css';
import { LangProvider } from './providers/LangProvider';
import { AppRouter } from './AppRouter';

function App() {

  const historyProvider = (<HistoryProvider children={<AppRouter/>}></HistoryProvider>);
  const langProvider = (<LangProvider children={historyProvider}/>);

  return (
    <ThemeProvider children={langProvider}>
    </ThemeProvider>
  );
}

export default App;