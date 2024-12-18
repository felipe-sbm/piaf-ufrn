import { SvelteKitAuth } from "@auth/sveltekit"
import Apple from "@auth/sveltekit/providers/apple"
import Facebook from "@auth/sveltekit/providers/facebook"
import Google from "@auth/sveltekit/providers/google"
import LinkedIn from "@auth/sveltekit/providers/linkedin"

export const { handle, signIn, signOut } = SvelteKitAuth({
  trustHost: true,
  providers: [
    Apple,
    Facebook,
    Google,
    LinkedIn,
  ],
})
