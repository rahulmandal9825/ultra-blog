import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDb } from "./utils";
import { User } from "./models";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";

const login = async (credentials) =>{
      try {
        connectToDb();
        const user = await User.findOne({username: credentials.username});
        if (!user) {
          throw new Error("wrong credentials")
        }
        const ispasswordCorrect = await bcrypt.compare(
          credentails.password,
          user.password
        )
        if (!ispasswordCorrect) {
          throw new Error("Wrong credentials");
        }
        return user
      } catch (error) {
        throw new Error("failed to login!");
      }
};



export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials){
              try {
                const user = await login(credentials);
              } catch (error) {
                
              }
            }
        })
    ],
    callbacks:{
        async signIn({user, account, profile}) {
            if (account.provider === 'github') {
              try {
                connectToDb();
                const user = await User.findOne({email: profile.email});

                if (!user) {
                  const newuser = new User({
                    username: profile.login,
                    email: profile.email,
                    image: profile?.image,
                  });

                  await newuser.save();
                }
              } catch (error) {
                console.log(error)
                return false;
                
              } 
            }
            return true;
        },
    },
});
