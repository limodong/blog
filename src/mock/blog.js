import Mock from 'mockjs'
Mock.mock('/api/blogtype', 'get', {
    code: 0,
    msg: "",
    'data|20': [
        {
            'id|+1': 1,
            'name': '分类@id',
            'articleCount|100-1000': 0,
            'order|+1': 0
        }
    ]
})

Mock.mock('/api/blog', 'get', {
    code: 0,
    msg: "",
    data: {
        'rows|500': [
            {
                'id': '@guid',
                'title': '@csentence(4,20)',
                'description': '@cparagraph',
                category: {
                    'id|1-20': 1,
                    'name': '分类@id'
                },
                'scanNumber|1000-10000': 0,
                'commentNumber|0-300': 0,
                'thumb': Mock.Random.dataImage('200x200', 'picture'),
                'createDate': () => Date.now() - Mock.Random.integer(0, 365 * 24 * 3600 * 1000)  // 最近0~365天内的
            }
        ],
        'total': function () {
            return this.rows.length;
        }
    }
})