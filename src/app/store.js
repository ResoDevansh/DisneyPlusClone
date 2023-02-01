import { getDefaultAppConfig } from "@firebase/util";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movies/movieSlice";
export default configureStore({
  reducer: { user: userReducer ,movie: movieReducer},
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
// import {getDefaultAppConfig} from '@firebase/util'
// import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
// export default configureStore({
//   reducer: {},
//   middleware: getDefaultMiddleware({
//     serializableCheck: false,
//   }),
// });
// import {getDefaultAppConfig} from '@firebase/util'
// import { getDefaultMiddleWare, configureStore } from '@reduxjs/toolkit';
// export default configureStore({
//   reducer: {},
//   middleware: getDefaultMiddleware({
//     serializableCheck:false,
//   }),
// });
