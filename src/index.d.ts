declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SOURCE_DATABASE_URL: string;
      TARGET_DATABASE_URL: string;
      SITE_ID: string;
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
