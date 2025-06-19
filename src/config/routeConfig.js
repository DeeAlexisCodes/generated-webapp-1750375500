// Router configuration for the application
export const routeConfig = {
  "pages": {
    "product_input": {
      "path": "/product-input",
      "component": "product_inputPage",
      "navigates_to": [
        "review_results"
      ],
      "requires_auth": false
    },
    "review_results": {
      "path": "/review-results",
      "component": "review_resultsPage",
      "navigates_to": [
        "${item.url}"
      ],
      "requires_auth": false
    },
    "product_data": {
      "path": "/product-data",
      "component": "product_dataPage",
      "navigates_to": [
        "${item.source_url}"
      ],
      "requires_auth": false
    },
    "processing": {
      "path": "/processing",
      "component": "processingPage",
      "navigates_to": [
        "home"
      ],
      "requires_auth": false
    },
    "home": {
      "path": "/home",
      "component": "homePage",
      "navigates_to": [
        "product_input"
      ],
      "requires_auth": false
    }
  },
  "landing_page": "home",
  "protected_routes": [],
  "navigation_structure": {}
};

// Helper function to get route path by page name
export const getRoutePath = (pageName) => {
  return routeConfig.pages[pageName]?.path || '/';
};

// Helper function to check if route requires authentication
export const requiresAuth = (pageName) => {
  return routeConfig.pages[pageName]?.requires_auth || false;
};

// Get landing page route
export const getLandingPage = () => {
  return routeConfig.landing_page;
};

// Get all navigation routes
export const getNavigationRoutes = () => {
  return Object.entries(routeConfig.pages).map(([name, config]) => ({
    name,
    path: config.path,
    component: config.component,
    requiresAuth: config.requires_auth
  }));
};