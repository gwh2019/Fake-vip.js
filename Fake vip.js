let body = $response.body;
let obj = JSON.parse(body);

// 修改 VIP 状态
if (obj.data) {
    obj.data.is_vip = true;    // 直接标记为 VIP
    obj.data.vip_expire = "2099-12-31";  // 会员过期时间设定为 2099 年
    obj.data.vip_level = 3;    // 设置最高等级 VIP
}

// 返回修改后的 JSON
$done({ body: JSON.stringify(obj) });
