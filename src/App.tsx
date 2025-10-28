import { useCallback, useMemo } from 'react';
import { BottomNav } from './components/whaledone/BottomNav';
import { HomeScreen } from './components/screens/HomeScreen';
import { ContactSelection } from './components/screens/ContactSelection';
import { WriteMessage } from './components/screens/WriteMessage';
import { Inbox } from './components/screens/Inbox';
import { SentCompliments } from './components/screens/SentCompliments';
import { InsightStats } from './components/screens/InsightStats';
import { ThankYouReply } from './components/screens/ThankYouReply';
import { Settings } from './components/screens/Settings';
import { Notifications } from './components/screens/Notifications';
import { Login } from './components/screens/Login';
import { SignUp } from './components/screens/SignUp';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AppProvider, useAppContext } from './context/AppContext';
import { getTranslation } from './utils/translations';
import { ScreenType, NavigationData, Contact } from './types/index';

function AppContent() {
  const { language, setLanguage } = useAppContext();
  const [currentScreen, setCurrentScreen] = React.useState<ScreenType>('login');
  const [navigationData, setNavigationData] = React.useState<NavigationData>({});

  const t = useMemo(() => getTranslation(language), [language]);

  const handleNavigate = useCallback((screen: ScreenType, data?: NavigationData) => {
    setCurrentScreen(screen);
    setNavigationData(data || {});
  }, []);

  const renderScreen = useCallback(() => {
    const sharedProps = { onNavigate: handleNavigate, t };

    switch (currentScreen) {
      case 'login':
        return <Login {...sharedProps} />;
      case 'signup':
        return <SignUp {...sharedProps} />;
      case 'home':
        return <HomeScreen {...sharedProps} />;
      case 'send':
        return (
          <ContactSelection
            {...sharedProps}
            preselectedContact={navigationData.preselectedContact}
          />
        );
      case 'write':
        return (
          <WriteMessage
            {...sharedProps}
            selectedContacts={(navigationData.selectedContacts as Contact[]) || []}
          />
        );
      case 'inbox':
        return <Inbox {...sharedProps} />;
      case 'sent':
        return <SentCompliments {...sharedProps} />;
      case 'notifications':
        return <Notifications {...sharedProps} />;
      case 'thank':
        return (
          <ThankYouReply
            {...sharedProps}
            messageId={navigationData.messageId}
          />
        );
      case 'stats':
        return <InsightStats {...sharedProps} />;
      case 'settings':
        return (
          <Settings
            {...sharedProps}
            language={language}
            onLanguageChange={setLanguage}
          />
        );
      default:
        return <HomeScreen {...sharedProps} />;
    }
  }, [currentScreen, navigationData, language, t, handleNavigate, setLanguage]);

  const isAuthScreen = currentScreen === 'login' || currentScreen === 'signup';
  const showBottomNav = !isAuthScreen;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[375px] mx-auto relative bg-background min-h-screen shadow-xl">
        <ErrorBoundary>
          {renderScreen()}
          {showBottomNav && (
            <BottomNav
              activeScreen={currentScreen}
              onNavigate={handleNavigate}
              t={t}
            />
          )}
        </ErrorBoundary>
      </div>
    </div>
  );
}

import React from 'react';

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}