import { type SupabaseClient, type Provider } from "@supabase/supabase-js"
import { error, redirect } from "@sveltejs/kit"

export async function doLogin(
	supabase: SupabaseClient,
	origin: string,
	searchParams: URLSearchParams
) {
	const provider = searchParams.get("provider") as Provider
	if (!provider) error(403, "Failed to login! Provider not specified!")

	const { data, error: err } = await supabase.auth.signInWithOAuth({
		provider: provider,
		options: {
			redirectTo: origin + "/api/auth/callback/",
			scopes: "identify email guilds guilds.members.read"
		}
	})

	if (err) error(400, JSON.stringify(err))
	redirect(303, data.url)
}
