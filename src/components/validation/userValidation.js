export const validationUserData=(user)=>{
    let errors={};
    if(user.name.trim()==""){
        errors.name="user name is required";
    }else if(user.name.trim().length<3){
        errors.name="user name must be at least 3 characters";
    }
    if(user.email.trim()==""){
        errors.email="user email is required";
    }else if(user.email.trim().length<9){
        errors.email="user email must be at least 9 characters";
    }
    if(user.password.trim()==""){
        errors.password="user password is required";
    }else if(user.password.trim().length<5){
        errors.password="user password must be at least 5 characters";
    }
return errors;
}