#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { PipelineBlueprint, Stage } from "@cdklabs/cdk-cicd-wrapper";

const app = new cdk.App();

PipelineBlueprint.builder().defineStages([Stage.RES]).synth(app);
