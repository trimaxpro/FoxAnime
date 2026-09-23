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

interface Site {
  id: number;
  name: string;
  url: string;
  description: string;
  category?: string;
}

export const onRequestGet = async ({ env }: { env: Env }): Promise<Response> => {
  try {
    if (!env || !env.DB) {
      return Response.json(
        { error: 'D1 binding DB is not configured' },
        { status: 503 }
      );
    }

    const { results } = await env.DB.prepare(
      'SELECT id, name, url, description, category FROM anime_sites ORDER BY id'
    ).all<Site>();

    return Response.json(results, {
      headers: {
        'Cache-Control': 'public, max-age=300',
      },
    });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : 'Database query failed' },
      { status: 500 }
    );
  }
};