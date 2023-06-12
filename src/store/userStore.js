import { create } from "zustand";

export const UserStore = create((set) => ({
  user: "dd",
  addUser: (newUser) => set({ user: newUser }),
  removeUser: () => set({ user: "" }),
}));
