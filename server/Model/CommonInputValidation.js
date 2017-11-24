
    const GeneralRegs = {
        // 支付宝账号-只能是邮箱和手机
        alipay: /^(([a-zA-Z0-9])+([a-zA-Z0-9_\.\-])*\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4}))|(0{0,1}1[34578]{1}[0-9]{9})$/ig,
        // 银行账号-仅包含英文字母、数字及中划线
        bankaccount: /^([a-zA-Z0-9]|-)+$/ig,
        // 空
        blank: /^\s*$/,
        // 移动电话
        cellphone: /^0{0,1}1[34578]{1}[0-9]{9}$/ig,
        // 邮箱
        email: /^([a-zA-Z0-9])+([a-zA-Z0-9_\.\-])*\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/ig,
        // 大陆身份证-弱判断，只需位数和形式满足
        icard: /^(\d{18}|\d{15}|\d{17}x)$/ig,
        // 香港身份证
        ihkcard: /^[a-z0-9]{1}\d{6,7}[a-z0-9]{1}$/ig,
        // 台湾身份证
        itwcard: /^[a-z]{1}\d{8,}$/ig,
        // 用户名-仅包含汉字英文字母及空格
        uname: /^[\u4e00-\u9fa5a-zA-Z\s]+$/ig,
        //password 大小写字母数字及下划线
        pwd: /^[a-zA-Z0-9_]{6,16}$/ig,
        // url
        url: /^(http(s)?:\/\/)?[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/ig,
        // 验证码
        vercode: /^\d{6}$/
    }

    class CommonInputValidation {
        constructor(){

        }

        isNumber(intArg) {
            return Object.prototype.toString.call(intArg) === "[object Number]";
        }

        isEmail(emailStr) {
            GeneralRegs.email.lastIndex = 0;
            return GeneralRegs.email.test(emailStr);
        }

        isName(nameStr) {
            GeneralRegs.uname.lastIndex = 0;
            return GeneralRegs.uname.test(nameStr);
        }

        isPwd(pwdStr) {
            GeneralRegs.pwd.lastIndex = 0;
            return GeneralRegs.pwd.test(pwdStr);
        }

        isUrl(urlStr) {
            GeneralRegs.url.lastIndex = 0;
            return GeneralRegs.url.test(urlStr);
        }

        isPhone(phoneArg) {
            GeneralRegs.cellphone.lastIndex = 0;
            return GeneralRegs.cellphone.test(phoneArg);
        }

        isIcard(icardArg) {
            GeneralRegs.icard.lastIndex = 0;
            return GeneralRegs.icard.test(icardArg);
        }

        isAlipay(alipaydArg) {
            GeneralRegs.alipay.lastIndex = 0;
            return GeneralRegs.alipay.test(alipaydArg);
        }

        isBankaccount(bankaccountdArg) {
            GeneralRegs.bankaccount.lastIndex = 0;
            return GeneralRegs.bankaccount.test(bankaccountdArg);
        }

    }

    module.exports = CommonInputValidation
