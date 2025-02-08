#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { PipelineBlueprint, Stage } from "@cdklabs/cdk-cicd-wrapper";
import { CdkCicdWrapperStack } from "../lib/cdk-cicd-wrapper-stack";
import { CdkCicdWrapperProvider } from "./cdk-cicd-wrapper.provider";

const app = new cdk.App();

PipelineBlueprint.builder()
  .defineStages([Stage.RES, Stage.DEV])
  .workbench({
    provide(context) {
      context.scope.node.setContext("hello-world", false);
      new CdkCicdWrapperStack(context.scope, "CdkCicdWrapperStack", {
        env: context.environment,
      });
    },
  })
  .addStack({
    provide(context) {
      context.scope.node.setContext("hello-world", true);
      new CdkCicdWrapperProvider();
    },
  })
  .synth(app);
