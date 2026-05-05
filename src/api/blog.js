import request from './request';

export async function getBlogCategory(){
    const resp = await request.get('/api/blogtype');
    return resp.data.data;
}

export async function getBlogList(page = 1,limit = 10,categoryId = -1){
    const resp = await request.get('/api/blog',{
        params: {
            page,
            limit,
            categoryId
        }
    });
    return resp.data;
}

export async function getBlogDatil(id){
    const resp = await request.get('/api/blog/' + id);
    return resp.data.data;
}
