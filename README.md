# React Native Job Finder Application

## Overview
This React Native application, built using Expo, provides a seamless platform to browse and bookmark job listings. It targets both Android and iOS devices and incorporates offline storage for bookmarked jobs.

## Features
- **Bottom Navigation:** Includes "Jobs" and "Bookmarks" sections for easy navigation.
- **Jobs Screen:** Fetches job data from an API with infinite scrolling. Each job card displays the title, location, salary, and phone details.
- **Job Details:** Tapping a job card opens a detailed view of the job.
- **Bookmarking:** Users can bookmark jobs, which are stored offline for access in the "Bookmarks" section.
- **Offline Viewing:** All bookmarked jobs are saved using AsyncStorage for offline access.
- **State Management:** Proper states for loading, error handling, and empty data scenarios.

## Technologies Used
- **React Native:** For building the mobile application.
- **React Navigation:** For handling navigation within the app.
- **Fetch API:** For making API calls.
- **AsyncStorage:** For offline storage of bookmarked jobs.

## Installation
Follow these steps to run the application locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/saishankargogada/Job_Board_Lokal_React_Native_Assignment.git

2.  **Create the App using Expo:**
    ```bash
    npx create-expo-app@latest

3.  **Install Dependencies:**
    ```bash
    npm install

4.  **Start the Expo Project:**
    ```bash
    npm expo start

Functional Requirements
1. Navigation
Bottom Navigation: Two tabs - "Jobs" and "Bookmarks."
2. Jobs Screen
Fetch job data using the given API.
Implement infinite scroll to load more jobs dynamically.
Display the following details in each card:
Title
Location
Salary
Phone
3. Job Details
Clicking on a job card navigates to a screen displaying detailed job information.
4. Bookmarking
Allow users to bookmark jobs from the job details screen.
Bookmarked jobs appear in the "Bookmarks" section.
Use AsyncStorage to store bookmarked jobs for offline access.
5. States
Handle loading, error, and empty data states gracefully.
Design and UX
The UI/UX is designed to be user-friendly and intuitive.
Library selection for styling is flexible (e.g., React Native Paper, Styled Components, etc.).

Video demonstrating the features and functionality of the application. You can watch the video here
https://drive.google.com/file/d/17WDStoLM2VCGdvtZ4UYtDZOiqYC_oKep/view?usp=sharing
