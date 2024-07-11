/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "smstanner",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    }
  },
  async run() {
    new sst.aws.Nextjs("SMSTanner", {
      environment: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY as string,
        ASSISTANT_ID: process.env.ASSISTANT_ID as string,
        MODEL_ID: process.env.MODEL_ID as string,
      },
    })
  },
})
