/**
 * Created by mostafa on 10/2/14.
 */
//var v_regex_mobile = new RegExp('^(09)[0-9]{9}$');
//var v_regex_first_name = new RegExp('^[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِ ]+$')
//var v_regex_email = new RegExp('^([1-zA-Z0-1@.s]{1,255})$')


$(document).ready(function(){

    $("#agreement").click(function(){
        $("#btn_submit").attr("disabled", !this.checked);
    });
    //
    $("#email").on(function(){
        alert("111")
    })
    function validation(){
        var abort=false;
        $('div.error').remove();
        $('.rq').each(function(){
            // validate blank input
            var er_empty = $(this).attr('placeholder');
            if ($(this).val().length == 0) {
                $(this).after('<div class="error" style="color: darkred">'+ 'لطفا ' + er_empty + ' خود را وارد نمائید.' + '</div>');
                abort=true;
            } else {
                // validate with Regex without password&password_chek
                var myptrn = $(this).attr('ptrn');
                var myerror = $(this).attr('error_text');
                var isvalid = $(this).val().search(myptrn) >=0;
                if (!isvalid){
                    $(this).after('<div class="error" style="color: darkred">'+ myerror + '</div>');
                    abort=true;
                }
            }
        });
        // validate password & password_chek
        var er_pwd = "حداقل تعداد کاراکتر کلمه عبور 6 رقم می باشد.";
        var pwd = $("#password");
        var pwd_chek = $("#password_check");
        if (pwd.val().length < 6 && pwd.val().length != 0) {
            pwd.after('<div class="error" style="color: darkred">' + er_pwd + '</div>');
            abort=true;
        }
        if (pwd_chek.val().length < 6 && pwd_chek.val().length != 0){
            pwd_chek.after('<div class="error" style="color: darkred">'+ er_pwd + '</div>');
            abort=true;
        }
        if (pwd.val().length >= 6 && pwd_chek.val().length >= 6 && pwd != pwd_chek){
            pwd.after('<div class="error" style="color: darkred">' + "کلمه عبور و تکرار آن یکسان نمی باشد." + '</div>');
            abort=true;
        }
        if (abort=true){$('html,body').animate({scrollTop: 250}, 'slow')}
        $("#mobile").closest('.form-control').addClass('has-has-error');
        return !abort;
    }
    //
    $("#btn_submit").click(function(){
        return validation();
    })

});  // on ready

//            $("#contact_form").submit(function(){
//                var abort = false;
//                $("div.error").remove();
//                $(':input[required]').each(function(){
//                    if ($(this).val()===''){
//                      $(this).after('<div class="er ror">لطفا فیلد بالا را پر کنید</div>');
//                      abort=true;
//                    }
//                });
//                if (abort) {return false;} else {return true;}
//            })  // on submit
//            $('input[placeholder]').blur(function() {
//                $("div.error").remove();
//                var mypattern = $(this).attr('pattern');
//                var myplaceholder = $(this).attr('placeholder');
//                var isvalid = $(this).val().search(mypattern) >=0;
//
//                if (!isvalid){
//                    $(this).focus();
//                    alert("Ok")
//                }
//            });


//    $('.rq').blur(function() {
//        var regex = new RegExp('^(09)[0-9]{9}$');
//        regex = new RegExp('^[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِ ]+$')
//        console.log($('.rq').val());
//        if (regex.test($('.rq').val())) {
//            console.log("yes");
//        } else {
//            console.log("no");
//        }
//    });

//else {
//    if (v_regex_mobile.test($("#mobile").val())){
//        abort=true;
//    } else {
//        abort=false;
//    }
//}

//