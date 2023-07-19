import { atom, selector } from "recoil";

// Atom 정의
export const countState = atom({
  key: "countState",
  default: 0,
});

// Selector 정의
export const doubledCountState = selector({
  key: "doubledCountState",
  get: ({ get }) => {
    const count = get(countState);
    if(count)
    return count + 1;
  },
});
