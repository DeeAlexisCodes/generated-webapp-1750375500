export async function getAllReviews() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
        {
            doctorName: 'Dr. Evelyn Reed',
            doctorImg: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
            reviewTitle: 'A Breakthrough in Photoprotection',
            reviewText: `<p>As a dermatologist, I consistently emphasize the importance of daily sun protection. However, the stability and efficacy of topical antioxidants can be a significant concern. This serum addresses that issue head-on.</p><p>I often recommend this to patients looking to boost their defense against environmental aggressors. The formulation, which combines 15% L-Ascorbic Acid with 1% Vitamin E and 0.5% Ferulic Acid, is supported by strong clinical evidence showing it not only stabilizes the vitamins but also doubles the photoprotection of the skin. It's an excellent addition to any morning skincare routine after cleansing and before moisturizing and sunscreen.</p>`,
            research: [
                { title: 'Ferulic acid stabilizes a solution of vitamins C and E and doubles its photoprotection of skin.', source: 'Journal of Investigative Dermatology', url: '#', excerpt: "This study demonstrates that a solution of 15% L-ascorbic acid, 1% alpha-tocopherol, and 0.5% ferulic acid provides a significant eight-fold increase in photoprotection against solar-simulated radiation." }
            ],
            prompt: `Generate a review from a dermatologist focusing on the product's photoprotective qualities. Emphasize the stability of the Vitamin C formula due to Ferulic Acid. Mention the key study: "Ferulic acid stabilizes a solution...". Tone: Clinical, reassuring, and educational.`
        },
        {
            doctorName: 'Dr. Marcus Chen',
            doctorImg: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400',
            reviewTitle: 'Hydration is Key to Healthy Skin',
            reviewText: `<p>Many of my patients struggle with dehydrated skin, which can exacerbate fine lines and lead to a dull complexion. This product is one of my top recommendations for restoring that crucial moisture barrier.</p><p>The inclusion of Hyaluronic Acid is what makes it so effective. This molecule is a powerhouse of hydration, capable of holding many times its weight in water. By incorporating this serum into your daily regimen, you are actively helping your skin retain the moisture it needs to look plump, healthy, and resilient. It's suitable for most skin types and layers well with other products.</p>`,
            research: [
                { title: 'The Role of Hyaluronic Acid in Skin Health and Rejuvenation', source: 'Dermato-Endocrinology', url: '#', excerpt: "Hyaluronic acid's unique capacity to retain water makes it a key component in maintaining skin hydration, elasticity, and volume." }
            ],
            prompt: `Generate a review from a primary care physician focusing on hydration. Explain the role of Hyaluronic Acid in simple terms for a patient. Tone: Warm, approachable, and focused on patient outcomes (plump, healthy skin).`
        },
        {
            doctorName: 'Dr. Anya Sharma',
            doctorImg: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
            reviewTitle: 'Optimizing Vitamin C Delivery',
            reviewText: `<p>Patients often ask if expensive Vitamin C serums are worth it. My answer always depends on the formulation. For Vitamin C to be effective, it needs to be able to penetrate the skin, and that's where this product excels.</p><p>Clinical studies on percutaneous absorption have shown that an acidic pH is critical for topical L-Ascorbic Acid to be effective. This serum is formulated at an optimal pH, which means you're not just applying a nice ingredient, you're applying one that can actually get to where it needs to go to provide antioxidant benefits. I appreciate the science-first approach to its design.</p>`,
            research: [
                { title: 'Topical L-Ascorbic Acid: Percutaneous Absorption Studies', source: 'Dermatologic Surgery', url: '#', excerpt: "Maximum absorption was achieved with a 20% vitamin C concentration... an acidic pH (below 3.5) is required for optimal percutaneous absorption." }
            ],
            prompt: `Generate a review from a scientific, detail-oriented doctor. Focus on the importance of formulation and pH for Vitamin C absorption, referencing the "Percutaneous Absorption Studies". Tone: Technical but clear, precise, and authoritative.`
        },
        {
            doctorName: 'Dr. Ben Carter',
            doctorImg: 'https://images.pexels.com/photos/8442533/pexels-photo-8442533.jpeg?auto=compress&cs=tinysrgb&w=400',
            reviewTitle: 'A Gentle Giant for Skin Health',
            reviewText: `<p>In my practice, I see many patients with sensitive skin who are wary of trying active ingredients. This serum is a product I feel confident recommending for them to try.</p><p>While it is a potent antioxidant cocktail, the formulation is elegant and generally well-tolerated. The combination of ingredients works synergistically not just to protect the skin, but also to calm and support it. Patients report that over time their skin feels less reactive and looks healthier. It's a fantastic, gentle entry point into using targeted serums for long-term skin health.</p>`,
            research: [],
            prompt: `Generate a review from a family doctor for patients with sensitive skin. The focus should be on the product being "well-tolerated" and "gentle" despite being potent. Tone: Caring, gentle, and reassuring.`
        },
        {
            doctorName: 'Dr. Olivia Martinez',
            doctorImg: 'https://images.pexels.com/photos/5794711/pexels-photo-5794711.jpeg?auto=compress&cs=tinysrgb&w=400',
            reviewTitle: 'The Foundation of a Solid Routine',
            reviewText: `<p>When building a skincare routine, there are a few foundational pillars I recommend: cleansing, moisturizing, and sun protection. For those looking to elevate their routine, an antioxidant serum like this is the next logical step.</p><p>It provides a crucial layer of defense that sunscreen alone cannot. By neutralizing free radicals from UV and environmental exposure, it helps prevent the breakdown of collagen and supports the skin's natural repair processes. Think of it as an insurance policy for your skin's future health and appearance. This is a solid, evidence-based choice.</p>`,
            research: [
                { title: 'Ferulic acid stabilizes a solution of vitamins C and E...', source: 'Journal of Investigative Dermatology', url: '#', excerpt: "This study demonstrates that a solution of 15% L-ascorbic acid, 1% alpha-tocopherol, and 0.5% ferulic acid provides a significant eight-fold increase in photoprotection against solar-simulated radiation." },
                { title: 'The Role of Hyaluronic Acid in Skin Health...', source: 'Dermato-Endocrinology', url: '#', excerpt: "Hyaluronic acid's unique capacity to retain water makes it a key component in maintaining skin hydration, elasticity, and volume." }
            ],
            prompt: `Generate a review from a holistic health practitioner. Frame the product as a "foundational" part of a complete skincare routine, complementing sunscreen. Explain the concept of neutralizing free radicals in a simple, analogy-driven way. Tone: Holistic, preventative, and encouraging.`
        }
    ];
}