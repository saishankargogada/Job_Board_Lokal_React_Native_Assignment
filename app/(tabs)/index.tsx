import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator, Modal } from 'react-native';
import JobCard from '@/components/JobCard'; // Assuming JobCard is in the same directory
import JobDetails from '@/components/JobDetails'; // Import JobDetails component

export default function JobScreen() {
  const [jobs, setJobs] = useState<any[]>([]); // State to store job data
  const [page, setPage] = useState<number>(1); // State to track the current page for pagination
  const [loading, setLoading] = useState(false); // State to manage loading indicator
  const [hasMore, setHasMore] = useState(true); // State to track if there are more jobs to load
  const [selectedJob, setSelectedJob] = useState<any | null>({}); // State to hold selected job details
  const [ImageURL, setImageUrl] = useState<any | null>(null);

  // Function to fetch job data from API
  const fetchJobs = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      const data = await response.json();
      const tempData = data["results"];
      
      if (tempData.length === 0) {
        setHasMore(false); // No more jobs to load
      }

      let newData = tempData.map((job: any) => ({
        id: job["whatsapp_no"],
        title: job?.title,
        company: job["company_name"],
        location: job["city_location"],
        salary:  `${job["salary_max"] || " na"}-${job["salary_min"] || " na"}`,
        imageUrl: job["creatives"][0]["thumb_url"],
        phone: job["whatsapp_no"],
        ...job
      }));

      setJobs((prevJobs) => [...prevJobs, ...newData]);
      setPage(page + 1); // Increment page for next API call
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch jobs initially and on page change
  useEffect(() => {
    fetchJobs();
  }, []);

  interface ItemType {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    imageUrl: string;
    phone: string;
    [key: string]: any;
  }

  // Function to render each job card
  const renderJobCard = ({ item }: { item: ItemType }) => (
    <JobCard
      // title={item.title}
      // company={item.company}
      // location={item.location}
      // salary={item.salary}
      // imageUrl={item.imageUrl}
      // phone={item.phone}
      job={item}
      onPress={() =>{
        setSelectedJob(item)
      }} // Set selected job when card is pressed
    />
  );

  // Close job details modal
  const closeJobDetails = () => setSelectedJob(null);

  return (
    <View style={styles.container}>
      {jobs.length > 0 ? (
        <FlatList
          data={jobs}
          renderItem={renderJobCard}
          keyExtractor={(item) => item.id}
          onEndReached={fetchJobs} // Fetch more data when end is reached
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading ? <ActivityIndicator size="large" color="#fff" /> : null} // Show loader when fetching
        />
      ) : (
        <ActivityIndicator size="large" color="#fff" /> // Initial loader
      )}

      {/* Job Details Modal */}
      <Modal
        visible={!!selectedJob}
        animationType="slide"
        transparent={true}
        onRequestClose={closeJobDetails}
      >
        <View style={styles.modalOverlay}>
          {selectedJob && <JobDetails job={selectedJob} onClose={closeJobDetails} />}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
});
