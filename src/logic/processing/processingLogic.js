export async function getPageMetadata() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    title: "Processing... - FrontrowMD"
  };
}

export async function getAppHeaderData() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    logoText: "FrontrowMD",
    logoIcon: "+",
    homeLink: "/"
  };
}

export async function getInitialProcessingCardData(productUrl = 'No URL provided') {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    cardTitle: "Analyzing Product",
    urlLabel: "Processing URL:",
    processingUrl: productUrl,
    statusText: "Initializing...",
    spinnerVisible: true,
    urlLabelVisible: true,
    processingUrlVisible: true,
    homeButtonText: "Back to Homepage",
    homeButtonLink: "/",
    homeButtonVisible: false
  };
}

export async function getProcessingCompletionCardData() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    cardTitle: "Request Sent",
    statusText: "Your request has been sent. The product analysis will appear on the homepage once completed.",
    spinnerVisible: false,
    urlLabelVisible: false,
    processingUrlVisible: false,
    homeButtonVisible: true
  };
}

export async function getFooterData() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    copyrightText: "© 2024 FrontrowMD. All rights reserved."
  };
}