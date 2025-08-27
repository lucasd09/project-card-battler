import { encodeBase32LowerCaseNoPadding, encodeHexLowerCase } from "@oslojs/encoding";
import { sha256 } from "@oslojs/crypto/sha2";
import { Session } from "@/models/session.model";
import { sessionService } from "@/services/session";

export function generateSessionToken(): string {
	const bytes = new Uint8Array(20);
	crypto.getRandomValues(bytes);
	const token = encodeBase32LowerCaseNoPadding(bytes);
	return token;
}

export async function createSession(token: string, userId: number): Promise<Session> {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const session: Session = {
		id: sessionId,
		userId,
		expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
	};
	await sessionService.create(session);

	return session;
}

export async function validateSessionToken(token: string): Promise<Session | null> {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));

	const result = await sessionService.getById(sessionId);

	if (!result) {
		return null;
	}

	const { id, expiresAt } = result;

	if (Date.now() >= expiresAt.getTime()) {
		await sessionService.delete(id);

		return null;
	}

	if (Date.now() >= expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
		const newExpirationDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);

		await sessionService.update(id, {expiresAt: newExpirationDate})
	}

	return result;
}

export async function invalidateSession(sessionId: string) {
	await sessionService.delete(sessionId)
}
