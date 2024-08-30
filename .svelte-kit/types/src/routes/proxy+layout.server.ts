// @ts-nocheck
import type { LayoutServerLoad } from "./$types"

export const load = async ({ locals: { session }, cookies }: Parameters<LayoutServerLoad>[0]) => {
	return {
		session,
		cookies: cookies.getAll()
	}
}
