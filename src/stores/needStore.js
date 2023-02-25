import { defineStore } from "pinia";

const DefaultState = () => {
  return {
    filterTags: [],
    projects: [
      {
        id: 1,
        title: "No Reset",
        desc: "Branding & UI / UX Design for a gaming channel.",
        img: "NoResetThumbnail.png",
      },

      {
        id: 2,
        title: "Andrea Esamor",
        desc: "Branding, UI / UX, & Web Development for a small biz.",
        img: "AndreaEsamor.png",
      },

      {
        id: 3,
        title: "TechToon",
        desc: "Collect comics & view other’s collections. App w/ Marvel API.",
        img: "TechToonPlaceholder.png",
      },
    ],

    collections: [
      {
        id: 1,
        title: "d i s p l a c e d",
        desc: "Abstract art generated from NASA photographs of planets.",
        img: "displaced.png",
        tags: ["tezos"],
      },
      {
        id: 2,
        title: "Workbenches",
        desc: "Technomancers, tinkering. But what are they’re making?",
        img: "workbenches.png",
        tags: ["tezos", "1of1"],
      },
      {
        id: 3,
        title: "The Monolith Collection",
        desc: "Rare monoliths captured in North American landscapes.",
        img: "monolith.png",
        tags: ["solana", "1of1"],
      },
    ],
  };
};

export const useNeedStore = defineStore("needStore", {
  state: DefaultState,

  actions: {
    addFilterTag(tag) {
      if (this.filterTags.includes(tag)) {
        this.removeTag(tag);
      } else {
        this.filterTags.push(tag);
      }
    },

    removeTag(tag) {
      let index = this.filterTags.indexOf(tag);

      this.filterTags.splice(index, 1);
    },
  },
});
