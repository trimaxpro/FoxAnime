interface D1PreparedStatementLike {
  bind(...values: any[]): D1PreparedStatementLike;
  all<T = unknown>(): Promise<{ results: T[] }>;
  run(): Promise<any>;
}

interface D1DatabaseLike {
  prepare(query: string): D1PreparedStatementLike;
}

interface Env {
  DB?: D1DatabaseLike;
}

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }): Promise<Response> => {
  try {
    const { email } = (await request.json()) as { email?: string };

    if (!email || typeof email !== 'string' || !email.includes('@') || email.length < 5) {
      return Response.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    const sanitizedEmail = email.trim().toLowerCase();

    if (env && env.DB) {
      // Ensure table exists
      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS download_subscribers (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email TEXT NOT NULL,
          source TEXT DEFAULT 'download_modal',
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `).run();

      // Insert lead
      await env.DB.prepare(
        'INSERT INTO download_subscribers (email, source) VALUES (?, ?)'
      )
        .bind(sanitizedEmail, 'download_modal')
        .run();
    }

    return Response.json(
      {
        success: true,
        message: 'Thank you for downloading FoxAnime!',
        downloadUrl:
          'https://github.com/trimaxpro/FoxAnime/releases/download/v1.1.0/Fox-Anime-v1.1.0-Windows.zip',
      },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : 'Failed to register download.' },
      { status: 500 }
    );
  }
};
