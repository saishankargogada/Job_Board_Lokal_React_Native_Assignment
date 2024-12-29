import { Stack } from 'expo-router';
import BookmarkScreen from './(tabs)/bookmark';
import { BookmarkProvider } from './contexts/BookmarkContext';

export default function RootLayout() {
  return (
    <BookmarkProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="Bookmarks" />
      </Stack>
    </BookmarkProvider>
  );
}
