export async function getProductDetails() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    productName: "Propolis Throat Spray 2-Pack",
    productDescription: "The Propolis Throat Spray 2-Pack offers a highly concentrated formula designed to support immune health and soothe scratchy throats. It delivers the market's highest concentration of bioactive polyphenols and flavonoids, along with essential compounds like Vitamin C, iron, and B vitamins. This spray utilizes propolis, a natural hive defender, to combat free radical damage and nourish gut bacteria. Each serving contains 85mg of highly concentrated bee propolis extract, purified water, non-GMO vegetable glycerin, and wildflower honey. For daily immune support, spray 4 times in the mouth; increase to 8 sprays if symptoms are present. The product is free from refined sugars, GMOs, glyphosate, artificial flavors, dyes, antibiotics, and is drug-free."
  };
}

export async function getProductImageUrl() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return "https://www.beekeepersnaturals.com/cdn/shop/files/MAIN_TS-T.png?v=1744737054&width=800";
}

export async function getProductIngredients() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return [
    "Bee Propolis extract",
    "Vegetable Glycerin",
    "Purified Water",
    "Wildflower Honey",
    "Polyphenols",
    "Flavonoids",
    "Vitamin C",
    "Iron",
    "B vitamins",
    "Zinc",
    "Antioxidants"
  ];
}

export async function getSearchQueries() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return [
    {
      term: "Propolis extract immunomodulatory effect respiratory infection",
      rationale: "This term targets the primary ingredient and its claimed mechanism for respiratory infections."
    },
    {
      term: "Bee propolis polyphenols antioxidant activity",
      rationale: "This term focuses on the bioactive compounds and their antioxidant activity."
    }
  ];
}

export async function getClinicalResearch() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return [
    {
      isRelevant: true,
      relevanceReason: "Directly investigates antioxidant activity of propolis polyphenols.",
      title: "Antioxidant Power of Propolis Polyphenols",
      productRelatedSummary: "This study confirms the potent antioxidant activity of polyphenols found in propolis. The research demonstrates how these compounds effectively scavenge free radicals, offering crucial support for immune health and protection against cellular damage.",
      supportingStatements: [
        "\"Propolis is a potential source of natural antioxidants such as phenolic acids and flavonoids.\"",
        "\"Flavonoids are characterized by powerful antioxidative properties.\""
      ],
      metadata: {
        authors: ["A. Kurek-Górecka", "et al."],
        publicationDate: "2013 Dec 20",
        journal: "Molecules"
      },
      sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6271064/"
    },
    {
      isRelevant: true,
      relevanceReason: "Investigates antimicrobial activity relevant to soothing throats.",
      title: "Propolis Extracts Boost Antimicrobial Activity",
      productRelatedSummary: "This study explored the impact of different extraction methods on the bioactivity of propolis. The findings confirm that propolis extracts exhibit substantial antioxidant and antimicrobial properties, which are crucial for immune defense and addressing throat discomfort.",
      supportingStatements: [
        "\"All extracts, even the aqueous ones, demonstrated antibacterial and antifungal activity.\"",
        "\"In vivo it may stimulate the immune system, activating the mechanisms involved in the microorganisms killing.\""
      ],
      metadata: {
        authors: ["M. M. Nichitoi", "et al."],
        publicationDate: "11 October 2021",
        journal: "Scientific Reports"
      },
      sourceUrl: "https://www.nature.com/articles/s41598-021-97130-9"
    },
    {
      isRelevant: true,
      relevanceReason: "Supports the product's claim of nourishing gut bacteria.",
      title: "Propolis Supports Gut Health and Microbiome Balance",
      productRelatedSummary: "This study showed that propolis supplementation improved gut microbiota composition and intestinal mucosal barrier function. These findings corroborate the claim of nourishing gut bacteria, suggesting benefits beyond throat-soothing.",
      supportingStatements: [
        "Propolis treatment improved gut microbiota composition.",
        "Propolis repaired intestinal mucosal damage."
      ],
      metadata: {
        authors: ["M. Xue", "et al."],
        publicationDate: "2019 Oct",
        journal: "Biomed Pharmacother"
      },
      sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/31545258/"
    }
  ];
}