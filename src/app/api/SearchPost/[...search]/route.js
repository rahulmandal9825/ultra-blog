export async function GET(req){
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const search = searchParams.get(searchTerm);
    return Response.json(search);
}