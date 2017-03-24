"use strict";function calendarFunc(e){AmCharts.makeChart("chartdiv",{type:"serial",categoryField:"date",startDuration:1,categoryAxis:{gridPosition:"start"},graphs:[{balloonText:"Homework",valueAxis:"homework",lineColor:"#ff0000",fillColors:"#ff0000",fillAlphas:1,type:"column",openField:"homework1",closeField:"homework2",valueField:"Not set",clustered:!1,columnWidth:1},{balloonText:"[[name1]]",closeField:"end1",lineColorField:"color1",fillColorsField:"color1",fillAlphas:1,newStack:!0,id:"AmGraph-1",columnWidth:.7,openField:"start1",titleField:"name1",type:"column",valueField:"Not set"},{balloonText:"[[name2]]",closeField:"end2",lineColorField:"color2",fillColorsField:"color2",fillAlphas:1,newStack:!0,id:"AmGraph-2",columnWidth:.7,openField:"start2",title:"graph 2",type:"column",valueField:"Not set"},{balloonText:"[[name3]]",closeField:"end3",lineColorField:"color3",fillColorsField:"color3",fillAlphas:1,newStack:!0,id:"AmGraph-3",columnWidth:.7,openField:"start3",title:"graph 3",type:"column",valueField:"Not set"}],guides:[{value:moment("14-03-2017 10:00","DD-MM-YYYY HH:mm"),label:"10:00",color:"#828282"},{value:moment("14-03-2017 11:00","DD-MM-YYYY HH:mm"),label:"11:00",color:"#828282"},{value:moment("14-03-2017 12:00","DD-MM-YYYY HH:mm"),label:"12:00",color:"#828282"},{value:moment("14-03-2017 13:00","DD-MM-YYYY HH:mm"),label:"LB",color:"orangered"},{value:moment("14-03-2017 14:00","DD-MM-YYYY HH:mm"),label:"14:00",color:"#828282"},{value:moment("14-03-2017 15:00","DD-MM-YYYY HH:mm"),label:"15:00",color:"#828282"},{value:moment("14-03-2017 16:00","DD-MM-YYYY HH:mm"),label:"16:00",color:"#828282"},{value:moment("14-03-2017 17:00","DD-MM-YYYY HH:mm"),label:"17:00",color:"#828282"},{value:moment("14-03-2017 18:00","DD-MM-YYYY HH:mm"),label:"18:00",color:"#828282"},{value:moment("14-03-2017 19:00","DD-MM-YYYY HH:mm"),label:"19:00",color:"#828282"},{value:moment("14-03-2017 20:00","DD-MM-YYYY HH:mm"),label:"20:00",color:"#828282"},{value:moment("14-03-2017 21:00","DD-MM-YYYY HH:mm"),label:"",color:"#828282"},{value:moment("14-03-2017 22:00","DD-MM-YYYY HH:mm"),label:"HW",color:"orangered"}],valueAxes:[{id:"lectures",type:"date",stackType:"regular",axisAlpha:1,autoGridCount:!1,gridCount:10,maximumDate:moment("14-03-2017 22:00","DD-MM-YYYY HH:mm"),minimumDate:moment("14-03-2017 10:00","DD-MM-YYYY HH:mm")},{id:"homework",type:"date",stackType:"regular",axisAlpha:1,autoGridCount:!1,gridCount:10,guides:[],maximumDate:moment("14-03-2017 22:00","DD-MM-YYYY HH:mm"),minimumDate:moment("14-03-2017 10:00","DD-MM-YYYY HH:mm")}],balloon:{},titles:[{id:"",size:15,text:""}],dataProvider:e})}var constants={serverUrl:"https://floating-inlet-77532.herokuapp.com/"},requester={get:function(e){var t=new Promise(function(t,n){$.ajax({url:e,method:"GET",success:function(e){t(e)}})});return t},putJSON:function(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},window.localStorage.getItem("jwt-token")),r=new Promise(function(r,o){$.ajax({url:e,headers:{authorization:n},method:"PUT",async:!0,cache:!1,processData:!1,contentType:"application/json",data:JSON.stringify(t),success:function(e){r(e)},error:function(e){o(e)}})});return r},postJSON:function(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},window.localStorage.getItem("jwt-token")),r=new Promise(function(r,o){$.ajax({url:e,headers:{authorization:n},method:"POST",async:!0,cache:!1,processData:!1,contentType:"application/json",data:JSON.stringify(t),success:function(e){r(e)},error:function(e){o(e)}})});return r},postWithFile:function(e,t){var n=window.localStorage.getItem("jwt-token"),r=new Promise(function(r,o){$.ajax({url:e,headers:{authorization:n},method:"POST",data:t,contentType:!1,async:!0,cache:!1,enctype:"multipart/form-data",processData:!1,success:function(e){r(e)},error:function(e){o(e)}})});return r},getJSON:function(e){var t=window.localStorage.getItem("jwt-token"),n=new Promise(function(n,r){$.ajax({url:e,beforeSend:function(e){e.setRequestHeader("authorization",t)},method:"GET",contentType:"application/json",success:function(e){n(e)},error:function(e){r(e)}})});return n}},authHelper={getCurrentUser:function(){var e={username:window.localStorage.getItem("current-user-username"),image:window.localStorage.getItem("current-user-image"),isAdmin:window.localStorage.getItem("current-user-admin"),_id:window.localStorage.getItem("current-user-id")};return null===e.username?Promise.reject():Promise.resolve(e)},authenticateUser:function(){return requester.getJSON(constants.serverUrl+"api/auth/getLoggedUser")}},toaster={init:function(){toastr.options={closeButton:!1,debug:!1,newestOnTop:!1,progressBar:!1,positionClass:"toast-custom-position",preventDuplicates:!0,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"}}},formValidation={validateForm:function(e,t){e.forEach(function(e){switch(e.name){case"username":break;case"password":((""+e.value).length<4||25<(""+e.value).length)&&(""+e.value).length>1?($("div.password-input").addClass("has-danger"),$("div.password-input div").css("display","block")):($("div.password-input").removeClass("has-danger"),$("div.password-input div").css("display","none"));break;case"confirmedPassword":e.value!==$("#password").val()&&$("#password").val()&&e.value?($("div.confirm-password-input").addClass("has-danger"),$("div.confirm-password-input div").css("display","block")):($("div.confirm-password-input").removeClass("has-danger"),$("div.confirm-password-input div").css("display","none"));break;case"email":}})}},animation={start:function(){$("body").addClass("loading")},stop:function(){$("body").removeClass("loading")}},eventHandler={userSettingsEvent:function(e,t){return new Promise(function(n,r){$("#user-settings-form").on("submit",function(o){o.preventDefault();var a={newPassword:$("#newPassword").val(),currentPassword:$("#currentPassword").val(),email:$("#email").val()};t(e.username,a).then(function(e){n(e)}).catch(function(e){r(e.responseText)})})})},userAvatarEvent:function(){$("#input-image").change(function(){var e=$(this)[0];if(e.files&&e.files[0]){var t=new FileReader;t.onload=function(e){$("#user-image").attr("src",e.target.result),$(".register-user-image").css("display","block")},t.readAsDataURL(e.files[0])}})},userAvatarChangeEvent:function(e,t){return new Promise(function(n,r){$("#user-avatar-form").submit(function(n){animation.start(),n.preventDefault();var r=new FormData($(this)[0]);return e(t,r).then(function(e){$(".user-username img").attr("src",constants.serverUrl+"image/"+e),toastr.success("User avatar successfully changed!"),animation.stop()}).catch(function(e){animation.stop(),toastr.error(JSON.parse(e.responseText).message)}),!1})})},userRegisterFormChangeEvent:function(){$("#user-create-user").change(function(){var e=$("#user-create-user").serializeArray();return formValidation.validateForm(e,$(this)),!1})},userRegisterFormSubmitEvent:function(e,t){return new Promise(function(t,n){$("#user-create-user").submit(function(t){animation.start(),t.preventDefault();var n=new FormData($(this)[0]);return e(n).then(function(e){animation.stop(),window.location.replace("/#/login"),toastr.success(e.message)}).catch(function(e){animation.stop(),toastr.error(JSON.parse(e.responseText).message)}),!1})})},userLoginFormSubmit:function(e){return new Promise(function(t,n){$("#login-submit").on("click",function(){animation.start();var n=$("#username").val(),r=$("#password").val(),o={username:n,password:r};e(o).then(function(e){animation.stop(),t(e)}).catch(function(e){animation.stop(),$("#password").val(""),toastr.error("Incorrect username or password")})})})},navbarSearch:function(){var e=$("#search-value");$("#zoom-icon").on("click",function(){e.css("display","inline-block"),e.focus()}),e.on("input",function(t){window.location.replace("/#/courses/all"),$(".course").each(function(){var t=$(this).find(".course-info").find("a").html().toLowerCase().indexOf(e.val().toLowerCase());t!==-1&&""!==e.val()?($(this).addClass("found"),$(this).removeClass("not-found")):""===e.val()?($(this).removeClass("not-found"),$(this).removeClass("found")):($(this).removeClass("found"),$(this).addClass("not-found"))})})},navbarHide:function(){var e=$(window).width();e>240&&e<460&&$(window).scroll(function(){$(this).scrollTop()>200?$(".header").slideUp(500):$(".header").slideDown(500)})},userNotifications:function(e,t){var n=$("#bell-icon"),r=$(".notification-panel");n.on("click",function(){$(".notification-count").hide(),n.hasClass("clicked")?(r.hide(),n.removeClass("clicked")):(r.slideDown(),n.addClass("clicked")),$(".notification").one("mouseover",function(){var n=this,r=$(this).attr("id"),o={id:r};e(t,o).then(function(e){$(n).animate({backgroundColor:"#ffffff"},1e3)})})})}},CACHED_TEMPLATES={},views={get:function(e){if(CACHED_TEMPLATES[e])return Promise.resolve(CACHED_TEMPLATES[e]);var t="scripts/views/templates/"+e+".handlebars",n=requester.get(t);return CACHED_TEMPLATES[e]=n,n}},homeData={getHomeData:function(){return requester.getJSON(constants.serverUrl+"courses/all")},getUserPanel:function(e){return requester.getJSON(constants.serverUrl+"api/users/user/"+e+"/courses")}},userData={getUserPanel:function(e,t){return requester.getJSON(constants.serverUrl+"api/users/user/"+t+"/courses")},register:function(e){return requester.postWithFile(constants.serverUrl+"api/auth/register",e)},login:function(e){return requester.postJSON(constants.serverUrl+"api/auth/login",e)},changeUserSettings:function(e,t){return requester.putJSON(constants.serverUrl+"api/users/user/"+e+"/settings",t)},changeUserAvatar:function(e,t){return requester.postWithFile(constants.serverUrl+"api/users/user/"+e+"/settings/avatar",t)},notificationSeen:function(e,t){return requester.postJSON(constants.serverUrl+"api/users/user/"+e+"/notifications",t)}},adminData={createCourse:function(e){return requester.postWithFile(constants.serverUrl+"courses/upload",e)}},courseData={getAllCourses:function(){return requester.getJSON(constants.serverUrl+"courses/all")},getCourseById:function(e){return requester.getJSON(constants.serverUrl+"courses/course/"+e)},getCourseHomework:function(e){return Promise.resolve("reached course homework"+e)},addCourseToUser:function(e,t){return requester.postJSON(constants.serverUrl+"api/users/user/"+e+"/courses",t)},addLectureToCourse:function(e,t){return requester.putJSON(constants.serverUrl+"courses/course/"+e,t)},removeCourseFromUser:function(e,t){return requester.putJSON(constants.serverUrl+"api/users/user/"+e+"/courses/remove",t)},addCommentToCourse:function(e,t){return requester.postJSON(constants.serverUrl+"courses/course/"+e+"/comments",t)}},handlebars=handlebars||Handlebars,authController={get:function(e,t){return{renderUI:function(){authHelper.authenticateUser().then(function(n){n.isAdmin="true"===n.isAdmin,n.notificationCount=n.notifications.length,t.get("nav-home").then(function(t){var r=handlebars.compile(t),o=r(n);$(".header").html(o),eventHandler.navbarSearch(),eventHandler.navbarHide(),eventHandler.userNotifications(e.notificationSeen,n.username)}),t.get("side-home").then(function(e){var t=handlebars.compile(e),r=t(n);$(".sidebar").html(r),$(".button-completed").on("click",function(){window.location="http://localhost:9000/#/user-panel",$(".button-pending").removeClass("selected"),$(this).addClass("selected")}),$(".button-pending").on("click",function(){window.location="http://localhost:9000/#/courses/all",$(".button-completed").removeClass("selected"),$(this).addClass("selected")})}),$(".sidebar").css("display","block")}).catch(function(e){t.get("nav-home").then(function(e){var t=handlebars.compile(e),n=t();$(".header").html(n),eventHandler.navbarHide(),$(".sidebar").css("display","none")})})}}}},handlebars=handlebars||Handlebars,homeController={get:function(e,t){return{getHome:function(){authHelper.getCurrentUser().then(function(n){n.isAdmin=n.roles.indexOf("admin")!=-1,e.getUserPanel(n.username).then(function(e){t.get("home").then(function(t){var n=handlebars.compile(t),r=n(e);$(".content").html(r)})})}).catch(function(e){t.get("authentication-required").then(function(e){var t=handlebars.compile(e),n=t();$(".content").html(n)})})}}}},handlebars=handlebars||Handlebars,userController={get:function(e,t,n){return{getUserPanel:function(n){animation.start();var r=void 0;t.get("user-courses").then(function(e){return r=e,authHelper.getCurrentUser()}).then(function(t){return e.getUserPanel(n,t.username)}).then(function(e){var t=handlebars.compile(r),n=t(e);$(".content").html(n),calendarFunc(e.calendar)}).catch(function(e){}),animation.stop()},userSettings:function(){animation.start();var n=void 0,r=void 0;t.get("user-settings").then(function(e){return r=e,authHelper.getCurrentUser()}).then(function(e){n=e}).then(function(){var e=handlebars.compile(r),t=e();$(".content").html(t),animation.stop()}).then(function(){eventHandler.userSettingsEvent(n,e.changeUserSettings).then(function(e){toastr.success("User settings successfully updated")}).catch(function(e){toastr.error(e)})})},userAvatar:function(){animation.start();var n=void 0,r=void 0;authHelper.getCurrentUser().then(function(e){r=e}),t.get("user-avatar").then(function(t){n=t;var o=handlebars.compile(n),a=o(r);$(".content").html(a),eventHandler.userAvatarEvent(),eventHandler.userAvatarChangeEvent(e.changeUserAvatar,r.username),animation.stop()})},register:function(){animation.start(),t.get("register").then(function(t){var n=handlebars.compile(t),r=n();$(".content").html(r),eventHandler.userAvatarEvent(),eventHandler.userRegisterFormChangeEvent(),eventHandler.userRegisterFormSubmitEvent(e.register,e.login),animation.stop()})},login:function(){animation.start(),t.get("login").then(function(t){var n=handlebars.compile(t),r=n();return $(".content").html(r),animation.stop(),eventHandler.userLoginFormSubmit(e.login)}).then(function(e){window.localStorage.setItem("current-user-username",e.username),window.localStorage.setItem("current-user-image",e.image),window.localStorage.setItem("current-user-admin",e.isAdmin),window.localStorage.setItem("current-user-id",e._id),window.localStorage.setItem("jwt-token",e.token),window.location.replace("/#/user-panel"),n.renderUI()}).catch(function(e){})},logout:function(){window.localStorage.setItem("jwt-token",""),window.localStorage.removeItem("current-user-username"),window.localStorage.removeItem("current-user-image"),window.localStorage.removeItem("current-user-admin"),window.localStorage.removeItem("current-user-id"),window.location.replace("/#"),n.renderUI()}}}},handlebars=handlebars||Handlebars,adminController={get:function(e,t){return{createCourse:function(){authHelper.authenticateUser().then(function(n){n.roles.indexOf("admin")!=-1?t.get("admin-create-course").then(function(t){var n=handlebars.compile(t),r=n();$(".content").html(r),$("#admin-create-course").submit(function(t){t.preventDefault();var n=new FormData($(this)[0]);return e.createCourse(n).then(function(e){}),!1})}):t.get("authentication-required").then(function(e){var t=handlebars.compile(e),n=t();$(".content").html(n)})}).catch(function(e){})}}}},handlebars=handlebars||Handlebars;HandlebarsIntl.registerWith(handlebars);var courseController={get:function(e,t){return{getAllCourses:function(){var n=void 0;e.getAllCourses().then(function(e){return n=e,t.get("courses-all")}).then(function(e){var t=handlebars.compile(e),r=t(n.result);$(".content").html(r)})},getCourseById:function(n){var r=n.id;e.getCourseById(r).then(function(n){t.get("course-info").then(function(o){var a=handlebars.compile(o),s=a(n);$(".content").html(s);var i=void 0,u=void 0,l={id:r};authHelper.authenticateUser().then(function(e){i=e,u=i.username}),$("#course-calendar").fullCalendar({events:n.result.course.lectures.map(function(e){return{title:e.name,start:e.date,allDay:!0}}),color:n.result.course.color,contentHeight:250,aspectRatio:2,firstDay:1});var c=$(".comments-all");c.scrollTop($(c)[0].scrollHeight),$("input[name=hw]").click(function(){$('input[name="hw"]:checked')[0]?$(".homework").css("display","block"):$(".homework").css("display","none")}),$(".add-course").on("click",function(){animation.start(),$(this).addClass("hide"),$(".remove-course").removeClass("hide"),e.addCourseToUser(u,l).then(toastr.success("course "+n.result.course.name+" added  successfully")).catch(function(e){}),animation.stop()}),$(".remove-course").on("click",function(){animation.start(),$(this).addClass("hide"),$(".add-course").removeClass("hide"),e.removeCourseFromUser(u,l).then(function(e){toastr.warning("course removed successfully")}).catch(function(e){}),animation.stop()}),$(".lecture-create-lecture-btn").on("click",function(){var t={name:$(".lecture-name").val(),date:$(".lecture-date").val(),startHour:$(".lecture-startHour").val(),endHour:$(".lecture-endHour").val(),homework:{name:$(".lecture-name").val()+"homework",deadline:$(".lecture-homework-deadline").val()}};e.addLectureToCourse(r,t).then(function(){})}),$("#form-new-comment").submit(function(n){var o=this;if(n.preventDefault(),$(this).find("textarea").val()){var a={commentText:$("#commentText").val()};e.addCommentToCourse(r,a).then(function(e){t.get("comment").then(function(t){var n=handlebars.compile(t),r=n(e);$(".comments-all").append(r),c.scrollTop($(c)[0].scrollHeight)}),$(o).find("textarea").val("")}).catch(function(){})}return!1})})})},getCourseHomework:function(t){e.getCourseHomework(t.id).then(function(e){})}}}},auth=authController.get(userData,views),home=homeController.get(homeData,views),user=userController.get(userData,views,auth),admin=adminController.get(adminData,views),course=courseController.get(courseData,views);toaster.init();var router=new Navigo(null,!1);auth.renderUI(),router.use,router.on(home.getHome).on("/user-panel",user.getUserPanel).on("/user-settings",user.userSettings).on("/user-settings/avatar",user.userAvatar).on("/register",user.register).on("/login",user.login).on("/logout",user.logout).on("/courses/all",course.getAllCourses).on("/course/:id/homework",course.getCourseHomework).on("/course/:id",course.getCourseById).on("/admin/courses/create",admin.createCourse).resolve();