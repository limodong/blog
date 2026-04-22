import request from './request'

export async function getBanner() {
    const resp = await request.get('/api/banner');
    return resp.data.data; // 直接获取业务data数据
}