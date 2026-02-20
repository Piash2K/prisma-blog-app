import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  trustedOrigins: [process.env.APP_URL || "http://localhost:4000"],
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        default: "user",
        required: false,
      },
      phone: {
        type: "string",
        required: false,
      },
      status: {
        type: "string",
        default: "active",
        required: false,
      },
    },
  },
    emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      console.log("VERIFICATION EMAIL TRIGGERED");
    },
  },
});
