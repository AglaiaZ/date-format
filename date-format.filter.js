/**
 * @author zhangboxuan
 *
 * 格式化日期
 */
export default function (val) {
    if (!val) {
        return '';
    }
    // 这样做在苹果手机上会显示NAN，坑。。
    // var date = new Date(val);

    // 这样写可解决ios兼容问题
    var date = new Date(val.replace(/-/g,'/'));
    var formatDate = '';

    formatDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

    return formatDate;
}
