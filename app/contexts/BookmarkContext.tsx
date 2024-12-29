import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Job {
  id: string;
  title: string;
  location: string;
  company: string;
  salary: string;
  phone: string;
  imageUrl: string;
}

interface BookmarkContextType {
  bookmarkedJobs: Job[];
  addBookmark: (job: Job) => void;
  removeBookmark: (jobId: string) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const useBookmark = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmark must be used within a BookmarkProvider');
  }
  return context;
};

interface BookmarkProviderProps {
  children: ReactNode;
}

export const BookmarkProvider: React.FC<BookmarkProviderProps> = ({ children }) => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState<Job[]>([]);

  // Load bookmarks from AsyncStorage on initialization
  useEffect(() => {
    const loadBookmarks = async () => {
      try {
        const storedBookmarks = await AsyncStorage.getItem('@bookmarkedJobs');
        if (storedBookmarks) {
          setBookmarkedJobs(JSON.parse(storedBookmarks));
        }
      } catch (error) {
        console.error('Failed to load bookmarks:', error);
      }
    };

    loadBookmarks();
  }, []);

  // Save bookmarks to AsyncStorage whenever they change
  useEffect(() => {
    const saveBookmarks = async () => {
      try {
        await AsyncStorage.setItem('@bookmarkedJobs', JSON.stringify(bookmarkedJobs));
      } catch (error) {
        console.error('Failed to save bookmarks:', error);
      }
    };

    saveBookmarks();
  }, [bookmarkedJobs]);

  const addBookmark = (job: Job) => {
    setBookmarkedJobs((prev) => [...prev, job]);
  };

  const removeBookmark = (jobId: string) => {
    setBookmarkedJobs((prev) => prev.filter((job) => job.id !== jobId));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedJobs, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

// import React, { createContext, useContext, useState, ReactNode } from 'react';

// interface Job {
//   id: string;
//   title: string;
//   location: string;
//   company: string;
//   salary: string;
//   phone: string;
//   imageUrl: string;
// }

// interface BookmarkContextType {
//   bookmarkedJobs: Job[];
//   addBookmark: (job: Job) => void;
//   removeBookmark: (jobId: string) => void;
// }

// const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

// export const useBookmark = () => {
//   const context = useContext(BookmarkContext);
//   if (!context) {
//     throw new Error('useBookmark must be used within a BookmarkProvider');
//   }
//   return context;
// };

// interface BookmarkProviderProps {
//   children: ReactNode;
// }

// export const BookmarkProvider: React.FC<BookmarkProviderProps> = ({ children }) => {
//   const [bookmarkedJobs, setBookmarkedJobs] = useState<Job[]>([]);

//   const addBookmark = (job: Job) => {
//     setBookmarkedJobs((prev) => [...prev, job]);
//   };

//   const removeBookmark = (jobId: string) => {
//     setBookmarkedJobs((prev) => prev.filter((job) => job.id !== jobId));
//   };

//   return (
//     <BookmarkContext.Provider value={{ bookmarkedJobs, addBookmark, removeBookmark }}>
//       {children}
//     </BookmarkContext.Provider>
//   );
// };
