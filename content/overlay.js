const hello_addon = {
  say_hello: function () {
    let bundle = Services.strings.createBundle(
      "chrome://hello-addon/locale/strings.properties");
    var msg = bundle.GetStringFromName("hello");
    msg += " ";
    msg += document.getElementById("hello-addon-strings").getString("hello");
    alert(msg);
  }
};
