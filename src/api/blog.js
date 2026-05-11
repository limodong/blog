import request from './request';

export async function getBlogCategory() {
    const resp = await request.get('/api/blogtype');
    return resp.data.data;
}

export async function getBlogList(page = 1, limit = 10, categoryId = -1) {
    const resp = await request.get('/api/blog', {
        params: {
            page,
            limit,
            categoryId
        }
    });
    return resp.data;
}

export async function getBlogDatil(id) {
    const resp = await request.get('/api/blog/' + id);
    return resp.data.data;
}

export async function postComment(nickname, content) {
    await request.post('/api/blog/add', { nickname, content });
}

export async function getCommentList(page = 1, limit = 10) {
    const resp = await request.get('/api/commentpage', {
        params: {
            page,
            limit
        }
    });
    return resp.data.data;
}
