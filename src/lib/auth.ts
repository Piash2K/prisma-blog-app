import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { role } from "better-auth/plugins";
import { stat } from "node:fs";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  trustedOrigins: [process.env.APP_URL || "http://localhost:3000"],
  user: {
    additionalFields: {
      role: {
        type: "string",
        default: "user",
        required: false,
      },
      phone:{
        type: "string",
        required: false,
      },
      status:{
        type: "string",
        default: "active",
        required: false,
      }
    },
    emailAndPassword: {
      enabled: true,
    },
  },
});
