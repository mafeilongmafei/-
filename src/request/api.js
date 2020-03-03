import http from "../request/index.js";


//得到轮播图片
export function getCarousel() {
  return http.get("/app.php/carousel");
}

//得到精品推荐课
export function getLesson() {
  return http.post("/app.php/language_course");
}

//得到课程的详细
export function getLessonDetails(id) {
  let fd = new FormData();
  fd.append("id", id);
  return http.post("/app.php/app_details_data", fd);
}
//讲师的信息
export function getLecturerInfo(id) {
  let fd = new FormData();
  fd.append("id", id);
  return http.post("/app.php/teacher_details", fd);
}

//获取学校lilst
export function getSchoolList(arr) {
  let fd = new FormData();
  arr.forEach(item => {
    if (item.value) {
      fd.append(item.key, item.value);
    }
  });

  return http.post("/index/school_list", fd);
}

//获取哪国学校
export function getStateSchool(id) {
  let fd = new FormData();
  fd.append("id", id);
  return http.post("/admin.php/index/all_school_twocate", fd);
}
//id(country的id)是哪国学校
export function geteducation(id) {
  let fd = new FormData();
  fd.append("id", id);
  return http.post("/index/all_school_twocate", fd);
}
//学校详情
export function getSchoolDetails(id) {
  let fd = new FormData();
  fd.append("id", id);
  return http.post("/app.php/yxk_details" , fd)
} 
//qq登录获取accessToken
export function getAccessToken( appkey, code, redirect_uri) {
         return http.get(`https://graph.qq.com/oauth2.0/token?
  grant_type=authorization_code&client_id=${process.env.VUE_APP_APPID}&client_secret=${appkey}&code=${code}&redirect_uri=${redirect_uri}`);
}
//获取qq登录的OpenID
export function getOpenID(access_token) {
  return http.get(`https://graph.qq.com/oauth2.0/me?access_token=${access_token}
  `);
}

