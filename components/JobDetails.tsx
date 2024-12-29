import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface JobDetailsProps {
  job?: any; // Job object
  onClose: () => void; // Close the details view
}

const JobDetails = ({ job, onClose }: JobDetailsProps) => {
  const {
    qualification,
    experience,
    shift_timing,
    job_role_id,
    city_location,
    locality,
    salary,
    phone,
    title,
    company,
    location,
  } = job || {};

  return (
    <View style={styles.detailsContainer}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.company}>{company}</Text>
      <Text style={styles.location}>{location}</Text>

      <View style={styles.detailSection}>
        <Text style={styles.salary}>Salary: <Text style={styles.value}>{salary}</Text></Text>
        <Text style={styles.salary}>Phone: <Text style={styles.value}>{phone}</Text></Text>
        <Text style={styles.salary}>Shift Timing: <Text style={styles.value}>{shift_timing}</Text></Text>
        <Text style={styles.salary}>Role ID: <Text style={styles.value}>{job_role_id}</Text></Text>
        <Text style={styles.salary}>Locality: <Text style={styles.value}>{locality}</Text></Text>
        <Text style={styles.salary}>Qualification: <Text style={styles.value}>{qualification}</Text></Text>
        <Text style={styles.salary}>City: <Text style={styles.value}>{city_location}</Text></Text>
        <Text style={styles.salary}>Experience: <Text style={styles.value}>{experience}</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginHorizontal: 10,
    marginTop: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 8,
    backgroundColor: '#ff6f61',
    borderRadius: 8,
    marginBottom: 15,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  company: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
    textAlign: 'center',
  },
  location: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 20,
  },
  salary: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  value: {
    fontWeight: 'bold',
    color: '#2a9d8f',
  },
});

export default JobDetails;
