import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import contactFormReducer from '../Redux/contactFormReducer';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    contactForm: contactFormReducer, 
  },
});


