export async function getLogoData() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    text: "FrontrowMD",
    icon: "+"
  };
}

export async function getHeroSectionData() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    title: {
      prefix: "AI-Powered",
      highlight: "Doctor-Vetted",
      suffix: "Review Generation"
    },
    subtitle: "Transform product pages into authentic, clinically-informed reviews that build trust and drive conversions.",
    cta: {
      text: "Get Started",
      link: "product_input.html"
    }
  };
}

export async function getHeroImageBubbleUrl() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
}

export async function getEvidenceBasedBubbleText() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return "Evidence-Based";
}

export async function getGraphIconSvg() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>';
}

export async function getShieldIconSvg() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>';
}

export async function getFooterCopyright() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return "© 2024 FrontrowMD. All rights reserved.";
}