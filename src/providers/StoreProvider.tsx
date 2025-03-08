// "use client";
// import { AppStore, makeStore } from "@/redux/store";
// import { ReactNode, useRef } from "react";
// import { Provider } from "react-redux";
// import persistStore from "redux-persist/es/persistStore";
// import { PersistGate } from "redux-persist/integration/react";

// const StoreProvider = ({ children }: { children: ReactNode }) => {
//   const storeRef = useRef<AppStore>(undefined);

//   if (!storeRef.current) {
//     storeRef.current = makeStore();
//   }

//   const persistedStore = persistStore(storeRef.current);

//   //* need to call this provider in Provider.tsx
//   return (
//     <Provider store={storeRef.current}>
//       <PersistGate loading={<p>Loading...</p>} persistor={persistedStore}>{children}</PersistGate>
//     </Provider>
//   );
// };

// export default StoreProvider;


"use client";
import { AppStore, makeStore } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

// ✅ Create store once and persist it
const store: AppStore = makeStore();
const persistedStore = persistStore(store);

const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistedStore}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;