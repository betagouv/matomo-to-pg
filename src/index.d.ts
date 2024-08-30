declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SOURCE_DATABASE_URL: string;
      TARGET_DATABASE_URL: string;
      SITE_ID: string;
      BUILD_VERSION: string; // docker build
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
