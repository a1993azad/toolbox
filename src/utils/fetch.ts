export async function fetchJSON(input:RequestInfo | URL, init?:RequestInit){
    return await fetch(input,init).then(res => res.json());
}