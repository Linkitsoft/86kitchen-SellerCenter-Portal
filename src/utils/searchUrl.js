export const searchUrl = (id) =>
{
    return new URLSearchParams(window.location.search).get(id)
}