import { BaseStackProvider } from "@cdklabs/cdk-cicd-wrapper";
import { CdkCicdWrapperStack } from "../lib/cdk-cicd-wrapper-stack";

export class CdkCicdWrapperProvider extends BaseStackProvider {
  stacks(): void {
    new CdkCicdWrapperStack(this.context.scope, "CdkCicdWrapperStack", {
      env: this.env,
    });
  }
}
