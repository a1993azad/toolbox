export async function fetchJSON(input:RequestInfo | URL, init?:RequestInit){
    const res = await fetch(input,init)
    return await res.json();
}