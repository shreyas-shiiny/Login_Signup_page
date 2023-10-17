let fn = {};
let aadharregex = new RegExp(/^\d{12}$/);
let panregex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
let emailregex = new RegExp(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/);

fn.validateaadhar = (val) => {
    let _isvalid = aadharregex.test(val);
    if (_isvalid) {
        return true;
    } else {
        return false;
    }
};


fn.validatePhoneNumber = (val) => {
    if (val.toString().length === 10) {
        return true;
    } else {
        return false;
    }
};

fn.validatepassword = (Password, ConfirmPassword) => {
    if (Password === ConfirmPassword) {
        return true;
    } else {
        return false;
    }
};

fn.validatepan = (val) => {
    let _isvalid = panregex.test(val);
    if (_isvalid) {
        return true;
    } else {
        return false;
    }
};

fn.validateemail = (val) => {
    let _isvalid = emailregex.test(val);
    if (_isvalid) {
        return true;
    } else {
        return false;
    }
};



export default fn;
