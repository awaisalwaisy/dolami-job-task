export const categories: HomeAsideCategory[] = [
  {
    id: 0,
    name: "Full Avatar",
    options: [
      {
        id: 0,
        name: "Human based",
        options: [
          {
            id: 0,
            name: "Male",
          },
          {
            id: 1,
            name: "Female",
          },
          {
            id: 2,
            name: "Unisex",
          },
        ],
      },
      {
        id: 1,
        name: "Animal and mythical creature based",
      },
      {
        id: 2,
        name: "Robot based",
      },
      {
        id: 3,
        name: "Other",
      },
    ],
  },
  {
    id: 1,
    name: "Others",
  },
];

export const filters: HomeAsideFilter = {
  contents: [
    {
      id: 0,
      label: "VRChat(Quest)",
      name: "vrchat-quest",
    },
    {
      id: 1,
      label: "VRChat(PCVR)",
      name: "vrchat-pcvr",
    },
  ],
  price: [
    {
      id: 0,
      label: "Under $10",
      name: "under-10",
    },
    {
      id: 1,
      label: "$10 to $20",
      name: "10-to-20",
    },
    {
      id: 2,
      label: "$20 to $30",
      name: "20-to-30",
    },
    {
      id: 3,
      label: "$30 to $40",
      name: "30-to-40",
    },
    {
      id: 4,
      label: "$40 to $50",
      name: "40-to-50",
    },
    {
      id: 5,
      label: "$50 to $70",
      name: "50-to-70",
    },
    {
      id: 6,
      label: "$70 & above",
      name: "70-and-above",
    },
  ],
  "polygon amount": [
    {
      id: 0,
      label: "Under △7,500",
      name: "under-7500",
    },
    {
      id: 1,
      label: "△7,500 to △10,000",
      name: "7500-to-10000",
    },
    {
      id: 2,
      label: "△10,000 to △15,000",
      name: "10000-to-15000",
    },
    {
      id: 3,
      label: "△15,000 to △20,000",
      name: "15000-to-20000",
    },
    {
      id: 4,
      label: "△20,000 to △32,000",
      name: "20000-to-32000",
    },
    {
      id: 5,
      label: "△32,000 to △70,000",
      name: "32000-to-70000",
    },
    {
      id: 6,
      label: "△70,000 & above",
      name: "70000-and-above",
    },
  ],
  "auto upload support": [
    {
      id: 0,
      label: "Supported",
      name: "supported",
    },
    {
      id: 1,
      label: "Unsupported",
      name: "unsupported",
    },
  ],
};
