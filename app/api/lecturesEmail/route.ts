//app/api/lecutresEmail/route.ts

export async function POST(req: Request) {
  try {
    const body = await req.json();

    return new Response(
      JSON.stringify({ message: "Email received", data: body }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Something went wrong" }),
      { status: 500 }
    );
  }
}