import { Stack } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Redirect } from 'expo-router';

export default function AuthLayout() {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  // If user is authenticated, redirect to main app
  if (isAuthenticated) {
    return <Redirect href="/" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
} 