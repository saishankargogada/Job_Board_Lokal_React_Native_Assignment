// BookmarkScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useBookmark } from '../contexts/BookmarkContext';
import JobCard from '@/components/JobCard';

export default function BookmarkScreen() {
  const { bookmarkedJobs } = useBookmark();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bookmarked Jobs</Text>
      <FlatList
        data={bookmarkedJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JobCard job={item} onPress={() => {}} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
