declare namespace NodeJS {
    interface ProcessEnv {
      readonly port: any;
      readonly DB: string;
    }
  }