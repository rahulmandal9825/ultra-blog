import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

// Function to handle login with credentials
const login = async (credentials) => {
  try {
    await connectToDb();
    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Failed to login!");
  }
};

// NextAuth configuration
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const user = await login(credentials);
          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === 'github') {
        try {
          await connectToDb();
          const existingUser = await User.findOne({ email: profile.email });
          if (!existingUser) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile?.image,
            });
            await newUser.save();
          }
        } catch (error) {
          console.error("Sign in error:", error);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
