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
    const awsAccount = aws.getCallerIdentity()
    const awsAccountId = (await awsAccount).accountId
    console.log(`AWS Account ID: ${awsAccountId}`)
    const domain = "smstanner.com"
    new sst.aws.Nextjs("SMSTanner", {
      domain: {
        name: domain,
        aliases: [`www.${domain}`],
      },
      environment: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY as string,
        ASSISTANT_ID: process.env.ASSISTANT_ID as string,
        MODEL_ID: process.env.MODEL_ID as string,
      },
    })
  },
})
