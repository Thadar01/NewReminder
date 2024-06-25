import { create } from "zustand";


import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import reminderSlice from "./slice";
import { TMainReminder } from "@/type";

const useStore = create<TMainReminder>()(
  persist(
    immer((set) => ({
      ...reminderSlice(set),
    })),
    {
      name: "remindertorage", 
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useStore;