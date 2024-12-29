// JobCard.tsx
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useBookmark } from '@/app/contexts/BookmarkContext';

interface JobCardProps {
  job: any; // Job object
  onPress: () => void;
}

export default function JobCard({ job, onPress }: JobCardProps) {
  const { bookmarkedJobs, addBookmark, removeBookmark } = useBookmark();
  const isBookmarked = bookmarkedJobs.some((bookmarkedJob) => bookmarkedJob.id === job.id);

  const toggleBookmark = () => {
    if (isBookmarked) {
      removeBookmark(job.id);
    } else {
      addBookmark(job);
    }
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image source={{ uri: job.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>job title:{job?.title || " na"}</Text>
        <Text style={styles.company}>company: {job?.company|| " na"}</Text>
        <Text style={styles.company}>location: {job?.location|| " na"}</Text>
        <Text style={styles.company}>salary: {job?.salary|| " na"}</Text>
        <Text style={styles.company}>phone: {job.phone|| " na"}</Text>
      </View>
      <TouchableOpacity onPress={toggleBookmark} style={styles.bookmarkButton}>
        <Text style={styles.bookmarkText}>{isBookmarked ? 'Unbookmark' : 'Bookmark'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    marginVertical: 12,
    marginHorizontal: 16,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
    overflow: 'hidden', // To make sure no shadow goes beyond the rounded corners
    alignItems: 'center', // Center the content horizontally
  },
  image: {
    width: '100%',
    height: 180, // Height of the rectangle thumbnail
    borderRadius: 12, // Rounded corners
    backgroundColor: '#e0e0e0',
    marginBottom: 16, // Space between image and text
    borderWidth: 1, // Border around the image for a more polished look
    borderColor: '#ddd', // Light border color
    shadowColor: '#000', // Shadow effect for the image
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4, // Elevation for Android devices
  },
  textContainer: {
    // alignItems: 'center', // Center the text elements
    marginBottom: 16, // Space between text and bookmark button
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  company: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#777',
    marginBottom: 4,
  },
  salary: {
    fontSize: 14,
    color: '#4CAF50', // Green color for salary to indicate positivity
    marginBottom: 4,
  },
  phone: {
    fontSize: 14,
    color: '#888',
  },
  bookmarkButton: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FF6347', // Use a vibrant color for the bookmark button
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Slight elevation for the button
  },
  bookmarkText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
});
