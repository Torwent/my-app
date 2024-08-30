import { doLogin } from "$lib/supabase.server"
import { error, redirect } from "@sveltejs/kit"

export const actions = {
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData()
		const email = formData.get("email") as string
		const password = formData.get("password") as string

		const { error: err } = await supabase.auth.signInWithPassword({ email, password })
		console.error(err)
		redirect(303, "/")
	},

	discord: async ({ locals: { supabase }, url: { origin, searchParams } }) => {
		return await doLogin(supabase, origin, searchParams)
	},

	logout: async ({ locals: { supabase } }) => {
		const { error: err } = await supabase.auth.signOut()
		if (err) error(400, JSON.stringify(err))
		redirect(303, "/")
	}
}
