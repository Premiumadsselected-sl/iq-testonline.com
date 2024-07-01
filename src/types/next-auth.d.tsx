import "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
       user_name: string
       email: string
       token: string
    }
  }
}