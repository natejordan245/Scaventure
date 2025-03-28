import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import store from './store';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { Redirect } from 'expo-router';
import { Slot } from 'expo-router';

function RootLayoutNav() {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  // If user is not authenticated, redirect to auth flow
  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false,
      }}
    />
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}
