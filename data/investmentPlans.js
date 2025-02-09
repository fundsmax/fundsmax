const investmentPlans = [
    {
      id: 1,
      name: 'Invest in Sports & Fitness',
      investment: 2500,
      profit: '1.60%', // 1.60%
      returnTime: 24, // in hours
      returnAmount: 2500 + (2500 * 1.60 / 100) // 2540
    },
    {
      id: 2,
      name: 'Invest in Pet Products',
      investment: 5000,
      profit: '1.65%', // 1.65%
      returnTime: 24,
      returnAmount: 5000 + (5000 * 1.65 / 100) // 5082.5
    },
    {
      id: 3,
      name: 'Invest in Office Equipment',
      investment: 10000,
      profit: '1.70%', // 1.70%
      returnTime: 24,
      returnAmount: 10000 + (10000 * 1.70 / 100) // 10170
    },
    {
      id: 4,
      name: 'Invest in Auto & Parts',
      investment: 15000,
      profit: '1.75%', // 1.75%
      returnTime: 24,
      returnAmount: 15000 + (15000 * 1.75 / 100) // 15262.5
    },
    {
      id: 5,
      name: 'Invest in Apparel & Accessories',
      investment: 20000,
      profit: '1.80%', // 1.80%
      returnTime: 24,
      returnAmount: 20000 + (20000 * 1.80 / 100) // 20360
    },
    {
      id: 6,
      name: 'Invest in C2C',
      investment: 25000,
      profit: '1.85%', // 1.85%
      returnTime: 24,
      returnAmount: 25000 + (25000 * 1.85 / 100) // 25462.5
    },
    {
      id: 7,
      name: 'Invest in Household Essentials',
      investment: 30000,
      profit: '1.90%', // 1.90%
      returnTime: 24,
      returnAmount: 30000 + (30000 * 1.90 / 100) // 30570
    },
    {
      id: 8,
      name: 'Invest in DIY & Hardware',
      investment: 35000,
      profit: '1.95%', // 1.95%
      returnTime: 24,
      returnAmount: 35000 + (35000 * 1.95 / 100) // 35682.5
    },
    {
      id: 9,
      name: 'Invest in Electronics',
      investment: 40000,
      profit: '2.00%', // 2%
      returnTime: 24,
      returnAmount: 40000 + (40000 * 2.00 / 100) // 40800
    },
    {
      id: 10,
      name: 'Invest in Beverages',
      investment: 50000,
      profit: '2.05%', // 2.05%
      returnTime: 24,
      returnAmount: 50000 + (50000 * 2.05 / 100) // 51025
    },
    {
      id: 11,
      name: 'Invest in Furniture',
      investment: 60000,
      profit: '2.10%', // 2.10%
      returnTime: 24,
      returnAmount: 60000 + (60000 * 2.10 / 100) // 61260
    },
    {
      id: 12,
      name: 'Invest in Media',
      investment: 70000,
      profit: '2.15%', // 2.15%
      returnTime: 24,
      returnAmount: 70000 + (70000 * 2.15 / 100) // 71505
    },
    {
      id: 13,
      name: 'Invest in B2B',
      investment: 80000,
      profit: '2.20%', // 2.20%
      returnTime: 24,
      returnAmount: 80000 + (80000 * 2.20 / 100) // 81760
    },
    {
      id: 14,
      name: 'Invest in B2C',
      investment: 90000,
      profit: '2.25%', // 2.25%
      returnTime: 24,
      returnAmount: 90000 + (90000 * 2.25 / 100) // 92025
    },
    {
      id: 15,
      name: 'Invest in B2G',
      investment: 100000,
      profit: '2.30%', // 2.30%
      returnTime: 24,
      returnAmount: 100000 + (100000 * 2.30 / 100) // 102300
    },
    {
      id: 16,
      name: 'Invest in Healthcare',
      investment: 110000,
      profit: '2.35%', // 2.35%
      returnTime: 24,
      returnAmount: 110000 + (110000 * 2.35 / 100) // 112585
    },
    {
      id: 17,
      name: 'Invest in Education',
      investment: 120000,
      profit: '2.40%', // 2.40%
      returnTime: 24,
      returnAmount: 120000 + (120000 * 2.40 / 100) // 122880
    },
    {
      id: 18,
      name: 'Invest in Renewable Energy',
      investment: 130000,
      profit: '2.45%', // 2.45%
      returnTime: 24,
      returnAmount: 130000 + (130000 * 2.45 / 100) // 133185
    },
    {
      id: 19,
      name: 'Invest in Real Estate',
      investment: 140000,
      profit: '2.50%', // 2.50%
      returnTime: 24,
      returnAmount: 140000 + (140000 * 2.50 / 100) // 143500
    },
    {
      id: 20,
      name: 'Invest in Transportation',
      investment: 150000,
      profit: '2.55%', // 2.55%
      returnTime: 24,
      returnAmount: 150000 + (150000 * 2.55 / 100) // 153825
    },
    {
      id: 21,
      name: 'Invest in Technology',
      investment: 160000,
      profit: '2.60%', // 2.60%
      returnTime: 24,
      returnAmount: 160000 + (160000 * 2.60 / 100) // 164160
    },
    {
      id: 22,
      name: 'Invest in Pharmaceuticals',
      investment: 170000,
      profit: '2.65%', // 2.65%
      returnTime: 24,
      returnAmount: 170000 + (170000 * 2.65 / 100) // 174505
    },
    {
      id: 23,
      name: 'Invest in Tourism',
      investment: 180000,
      profit: '2.70%', // 2.70%
      returnTime: 24,
      returnAmount: 180000 + (180000 * 2.70 / 100) // 184860
    },
    {
      id: 24,
      name: 'Invest in Agriculture',
      investment: 190000,
      profit: '2.75%', // 2.75%
      returnTime: 24,
      returnAmount: 190000 + (190000 * 2.75 / 100) // 195225
    },
    {
      id: 25,
      name: 'Invest in Food & Beverage',
      investment: 200000,
      profit: '2.80%', // 2.80%
      returnTime: 24,
      returnAmount: 200000 + (200000 * 2.80 / 100) // 205600
    },
    {
      id: 26,
      name: 'Invest in Fashion',
      investment: 210000,
      profit: '2.85%', // 2.85%
      returnTime: 24,
      returnAmount: 210000 + (210000 * 2.85 / 100) // 215985
    },
    {
      id: 27,
      name: 'Invest in Mining',
      investment: 220000,
      profit: '2.90%', // 2.90%
      returnTime: 24,
      returnAmount: 220000 + (220000 * 2.90 / 100) // 226380
    },
    {
      id: 28,
      name: 'Invest in Telecommunications',
      investment: 230000,
      profit: '2.95%', // 2.95%
      returnTime: 24,
      returnAmount: 230000 + (230000 * 2.95 / 100) // 236785
    },
    {
      id: 29,
      name: 'Invest in Manufacturing',
      investment: 240000,
      profit: '3.00%', // 3.00%
      returnTime: 24,
      returnAmount: 240000 + (240000 * 3.00 / 100) // 247200
    },
    {
      id: 30,
      name: 'Invest in Entertainment',
      investment: 250000,
      profit: '3.05%', // 3.05%
      returnTime: 24,
      returnAmount: 250000 + (250000 * 3.05 / 100) // 257625
    },
    {
      id: 31,
      name: 'Invest in Automotive',
      investment: 260000,
      profit: '3.10%', // 3.10%
      returnTime: 24,
      returnAmount: 260000 + (260000 * 3.10 / 100) // 268060
    },
    {
      id: 32,
      name: 'Invest in Aerospace',
      investment: 270000,
      profit: '3.15%', // 3.15%
      returnTime: 24,
      returnAmount: 270000 + (270000 * 3.15 / 100) // 278505
    },
    {
      id: 33,
      name: 'Invest in Defense',
      investment: 280000,
      profit: '3.20%', // 3.20%
      returnTime: 24,
      returnAmount: 280000 + (280000 * 3.20 / 100) // 288960
    },
    {
      id: 34,
      name: 'Invest in Biotechnology',
      investment: 290000,
      profit: '3.25%', // 3.25%
      returnTime: 24,
      returnAmount: 290000 + (290000 * 3.25 / 100) // 299425
    },
    {
      id: 35,
      name: 'Invest in Retail',
      investment: 300000,
      profit: '3.30%', // 3.30%
      returnTime: 24,
      returnAmount: 300000 + (300000 * 3.30 / 100) // 309900
    },
    {
      id: 36,
      name: 'Invest in Logistics',
      investment: 310000,
      profit: '3.35%', // 3.35%
      returnTime: 24,
      returnAmount: 310000 + (310000 * 3.35 / 100) // 320385
    },
    {
      id: 37,
      name: 'Invest in Utilities',
      investment: 320000,
      profit: '3.40%', // 3.40%
      returnTime: 24,
      returnAmount: 320000 + (320000 * 3.40 / 100) // 330880
    },
    {
      id: 38,
      name: 'Invest in Chemicals',
      investment: 330000,
      profit: '3.45%', // 3.45%
      returnTime: 24,
      returnAmount: 330000 + (330000 * 3.45 / 100) // 341385
    },
    {
      id: 39,
      name: 'Invest in Construction',
      investment: 340000,
      profit: '3.50%', // 3.50%
      returnTime: 24,
      returnAmount: 340000 + (340000 * 3.50 / 100) // 351900
    },
    {
      id: 40,
      name: 'Invest in Financial Services',
      investment: 350000,
      profit: '3.55%', // 3.55%
      returnTime: 24,
      returnAmount: 350000 + (350000 * 3.55 / 100) // 362425
    }
  ];
  
  export default investmentPlans;