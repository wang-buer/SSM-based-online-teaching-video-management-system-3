const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"视频分类","menuJump":"列表","tableName":"shipinfenlei"}],"menu":"视频分类管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"视频信息","menuJump":"列表","tableName":"shipinxinxi"}],"menu":"视频信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"系统公告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"视频信息列表","menuJump":"列表","tableName":"shipinxinxi"}],"menu":"视频信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"视频信息列表","menuJump":"列表","tableName":"shipinxinxi"}],"menu":"视频信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"视频信息","menuJump":"列表","tableName":"shipinxinxi"}],"menu":"视频信息管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"视频信息列表","menuJump":"列表","tableName":"shipinxinxi"}],"menu":"视频信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"教师","tableName":"jiaoshi"}]
    }
}
export default menu;