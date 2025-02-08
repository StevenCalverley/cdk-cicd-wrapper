import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as wrapper from "@cdklabs/cdk-cicd-wrapper";

export class CdkCicdWrapperStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    if (cdk.FeatureFlags.of(this).isEnabled("hello-world")) {
      wrapper.logger.info("Hello is enabled");
      new cdk.CfnOutput(this, "Hello", {
        value: "Hello World",
      });
    }
  }
}
