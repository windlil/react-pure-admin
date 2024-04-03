import { create, type StateCreator } from "zustand";
import { subscribeWithSelector, devtools } from "zustand/middleware";

export const createStore = <T>(state: StateCreator<T>) => create(devtools(subscribeWithSelector(state)))