class AppUrl {

  static SoketUrl = 'https://socket.hellosuperstars.com';
  static BaseUrl = 'http://192.168.0.197:81/HelloSuperStarsBackend/public/api/';
  static MediaBaseUrl = 'http://192.168.0.197:81/HelloSuperStarsBackend/public/';
  static virtualTour = this.BaseUrl + 'mobile/getVirtualTourVideo';
  static UserLogin = this.BaseUrl + 'login';
  static UserForgetPassword = this.BaseUrl + 'user_forget_password';
  static UserForgetPasswordStore = this.BaseUrl + 'user_forget_password_store';
  static MyLoaction = this.BaseUrl + 'user/v1/current-location/'; //ip
  static VerifyUser = this.BaseUrl + 'verify_user';
  static CreateUser = this.BaseUrl + 'register';
  static UserInfo = this.BaseUrl + 'user_info';

}

export default AppUrl;
