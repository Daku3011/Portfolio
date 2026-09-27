import { NextResponse } from "next/server";
import { getGitHubProfile, getGitHubRepositories } from "@/lib/github";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const [profile, repos] = await Promise.all([
      getGitHubProfile(),
      getGitHubRepositories(),
    ]);

    return NextResponse.json({
      status: "ok",
      profile,
      repositories: repos,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to fetch GitHub telemetry",
      },
      { status: 500 }
    );
  }
}
