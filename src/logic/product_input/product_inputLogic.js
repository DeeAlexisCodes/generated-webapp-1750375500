export async function getReviewGenerationFormConfig() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    title: "Start a New Review Generation",
    subtitle: "Enter a product page URL to begin the analysis and review creation process.",
    form: {
      action: "processing.html",
      method: "GET",
      inputPlaceholder: "https://www.example.com/product/item-123",
      buttonText: "Generate Reviews"
    }
  };
}

export async function getRecentProductsData() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    sectionTitle: "Recent Products",
    products: [
      {
        id: "prod-1",
        title: "Vitamin C Serum",
        url: "sephora.com/product/...",
        imageKey: "productImage1"
      },
      {
        id: "prod-2",
        title: "Daily Moisturizer SPF 30",
        url: "ultabeauty.com/product/...",
        imageKey: "productImage2"
      },
      {
        id: "prod-3",
        title: "Retinol Night Cream",
        url: "amazon.com/product/...",
        imageKey: "productImage3"
      }
    ]
  };
}

export async function getFooterText() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return "&copy; 2024 FrontrowMD. All rights reserved.";
}

export function getProductImage1Url() {
  return "https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg?auto=compress&cs=tinysrgb&w=600";
}

export function getProductImage2Url() {
  return "https://images.pexels.com/photos/6621472/pexels-photo-6621472.jpeg?auto=compress&cs=tinysrgb&w=600";
}

export function getProductImage3Url() {
  return "https://images.pexels.com/photos/7262911/pexels-photo-7262911.jpeg?auto=compress&cs=tinysrgb&w=600";
}