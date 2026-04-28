import request from './request';

export async function getBlogCategory(){
    const resp = await request.get('/api/blogtype');
    return resp.data;
}

export async function getBlogList(){
    const resp = await request.get('/api/blog');
    return resp.data;
}